const fs = require('fs');
const path = require('path');
const memoizeOne = require('memoize-one');

module.exports = function responseUtilsFactory() {
  const interpolateRe = /#{([\w\d\-._$]+)}/g;
  const runnerPath = path.resolve('./build/server/runner.js');
  const manifestPath = path.resolve('./build/manifest.json');

  /**
   * Load manifest, runner resources and prepare sources object.
   */
  function _loadResources() {
    const manifest = fs.existsSync(manifestPath)
      ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
      : {};

    return {
      manifest,
      runner: fs.existsSync(runnerPath)
        ? fs.readFileSync(runnerPath, 'utf8')
        : '',
    };
  }

  /**
   * Prepares default $Source object structure assembled
   * from the built manifest.json file.
   */
  function _prepareSource({ assetsByCompiler, assets, publicPath }, language) {
    const buildSource = (name, sourceFilter, attr = {}) => {
      if (!assetsByCompiler?.[name]) {
        return [];
      }

      // Filter unwanted assets and use only current language
      const assetsData = Object.values(assetsByCompiler[name]);
      const filteredAssets = assetsData.filter(sourceFilter);

      // Resolve asset names to actual filenames
      return filteredAssets.map(asset => {
        const assetFile = assets[asset.name]?.fileName;

        if (!process.env.CDN_STATIC_ROOT_URL) {
          return [publicPath + assetFile, attr];
        }

        // Add CDN as primary source with static file asn fallback
        return [
          `${process.env.CDN_STATIC_ROOT_URL}${assetFile}`,
          {
            ...attr,
            fallback: publicPath + assetFile,
          },
        ];
      });
    };

    // Filter out specific assets for each source entry
    const cssFilter = ({ name }) => name.endsWith('.css');
    const jsFilter = ({ name }) =>
      (name.endsWith('.js') && !name.includes('/locale/')) ||
      name.includes(`locale/${language}.js`);

    return {
      styles: buildSource('client.es', cssFilter, {
        rel: 'stylesheet',
        preload: true,
      }),
      scripts: buildSource('client', jsFilter, {
        async: true,
        crossorigin: 'anonymous',
      }),
      esScripts: buildSource('client.es', jsFilter, {
        async: true,
        crossorigin: 'anonymous',
      }),
    };
  }

  function _renderStyles(styles) {
    if (!Array.isArray(styles)) {
      return '';
    }

    return styles.reduce((acc, cur) => {
      if (typeof cur === 'string') {
        acc += `<link rel="stylesheet" href="${cur}" />`;

        return acc;
      }

      const [
        href,
        { fallback = null, preload, rel = 'stylesheet', ...options },
      ] = cur;
      let link = `<link href="${href}" rel="${rel}"`;

      // Generate fallback handler
      if (fallback) {
        link += ` onerror="this.onerror=null;this.href='${fallback}';"`;
      }

      // Generate other attributes
      for (const [attr, value] of Object.entries(options)) {
        link += ` ${attr}="${value}"`;
      }

      acc += link + ' />';

      return acc;
    }, '');
  }

  function _renderStylesPreload(styles) {
    if (!Array.isArray(styles)) {
      return '';
    }

    return styles.reduce((acc, cur) => {
      if (!cur[1]?.preload) {
        return acc;
      }

      acc += `<link as="style" href="${cur[0]}" rel="preload" type="text/css" />`;

      return acc;
    }, '');
  }

  function _getRevivalSettings({ bootConfig, response }) {
    const { settings } = bootConfig;

    return `(function (root) {
      root.$Debug = ${settings.$Debug};
      root.$IMA = root.$IMA || {};
      $IMA.SPA = ${response?.SPA ?? false};
      $IMA.$Language = "${settings.$Language}";
      $IMA.$Env = "${settings.$Env}";
      $IMA.$Debug = ${settings.$Debug};
      $IMA.$Version = "${settings.$Version}";
      $IMA.$App = ${JSON.stringify(settings.$App)};
      $IMA.$Protocol = "${settings.$Protocol}";
      $IMA.$Host = "${settings.$Host}";
      $IMA.$Path = "${settings.$Path}";
      $IMA.$Root = "${settings.$Root}";
      $IMA.$LanguagePartPath = "${settings.$LanguagePartPath}";
    })(typeof window !== 'undefined' && window !== null ? window : global);
    `;
  }

  function _getRevivalCache({ response }) {
    return `(function (root) {
      root.$IMA = root.$IMA || {};
      $IMA.Cache = ${response?.page?.cache ?? JSON.stringify({})};
    })(typeof window !== 'undefined' && window !== null ? window : global);
    `;
  }

  function _renderScript(name, script) {
    return `<script id="ima-${name}">${script}</script>`;
  }

  function _setCookieHeaders({ res, context }) {
    for (let [name, param] of context?.page?.cookie ?? []) {
      const options = _prepareCookieOptionsForExpress(param.options);
      res.cookie(name, param.value, options);
    }
  }

  function _prepareCookieOptionsForExpress(options) {
    let expressOptions = Object.assign({}, options);

    if (typeof expressOptions.maxAge === 'number') {
      expressOptions.maxAge *= 1000;
    } else {
      delete expressOptions.maxAge;
    }

    return expressOptions;
  }

  function sendResponseHeaders({ context, res }) {
    _setCookieHeaders({ res, context });
    res.set(context?.page?.headers ?? {});
  }

  // Preload resources
  let resources = _loadResources();
  const memoPrepareSources = memoizeOne((manifest, language) =>
    _prepareSource(manifest, language)
  );

  function prepareContentVariables({ response, bootConfig }) {
    const { settings } = bootConfig;

    // Always reload resources in dev mode to have fresh copy
    if (process.env.IMA_CLI_WATCH) {
      resources = _loadResources();
    }

    // Generate default $Source structure
    const defaultSource = memoPrepareSources(
      resources.manifest,
      settings.$Language
    );

    // Get current file sources to load
    const { styles, ...source } =
      settings?.$Source?.(response, resources.manifest, defaultSource) ??
      defaultSource;

    return {
      ...response.contentVariables,
      _: {
        styles,
        scripts: source,
      },
      revivalSettings: _renderScript(
        'revival-settings',
        _getRevivalSettings({ response, bootConfig })
      ),
      revivalCache: _renderScript(
        'revival-cache',
        _getRevivalCache({ response })
      ),
      runner: _renderScript('runner', resources.runner),
      styles: _renderStyles(styles),
      source: JSON.stringify(source),
    };
  }

  function processContent({ response, bootConfig }) {
    if (!response?.content || !bootConfig) {
      return response?.content;
    }

    const { settings } = bootConfig;
    const extendedSettings = { ...settings, ...response.contentVariables };
    const interpolate = (_, envKey) => extendedSettings[envKey] ?? '';

    /**
     * Double call adds support for interpolation inside content variables
     * (for example #{source} template variable inside runner)
     */
    return response.content
      .replace(interpolateRe, interpolate)
      .replace(interpolateRe, interpolate);
  }

  return {
    processContent,
    sendResponseHeaders,
    prepareContentVariables,
    _prepareSource,
    _renderStyles,
    _renderStylesPreload,
    _prepareCookieOptionsForExpress,
  };
};
