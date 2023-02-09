const fs = require('fs');
const path = require('path');
const validator = require('validator');
const { renderMeta } = require('./utils/metaUtils');
const {
  renderScript,
  renderStyles,
  prepareDefaultResources,
} = require('./utils/resourcesUtils');

module.exports = function responseUtilsFactory() {
  const contentInterpolationRe = /#{([\w\d\-._$]+)}/g;
  const runnerPath = path.resolve('./build/server/runner.js');
  const manifestPath = path.resolve('./build/manifest.json');

  /**
   * Load manifest, runner resources and prepare sources object.
   */
  function _loadTemplates() {
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

  function _getRevivalSettings({ settings, response }) {
    return `(function (root) {
      root.$Debug = ${settings.$Debug};
      root.$IMA = root.$IMA || {};
      $IMA.SPA = ${response?.SPA ?? false};
      $IMA.$PublicPath = "${process.env.IMA_PUBLIC_PATH ?? ''}";
      $IMA.$Language = "${settings.$Language}";
      $IMA.$Env = "${settings.$Env}";
      $IMA.$Debug = ${settings.$Debug};
      $IMA.$Version = "${settings.$Version}";
      $IMA.$App = ${JSON.stringify(settings.$App)};
      $IMA.$Protocol = "${
        settings.$Protocol && validator.escape(settings.$Protocol)
      }";
      $IMA.$Host = "${settings.$Host && validator.escape(settings.$Host)}";
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
  let templates = _loadTemplates();

  /**
   * Create base set of content variables, containing meta tags,
   * runner, revival settings, revival cache and JS and CSS source
   * tags generated from manifest.json in build folder.
   *
   * @param event IMA hooks server event.
   * @returns object Object with default set of content variables.
   */
  function createContentVariables({ context }) {
    const { response, bootConfig, app } = context;

    if (!bootConfig?.settings) {
      return {};
    }

    const metaManager = app?.oc?.get('$MetaManager');
    const { settings } = bootConfig;

    // Always reload resources in dev mode to have fresh copy
    if (process.env.IMA_CLI_WATCH) {
      templates = _loadTemplates();
    }

    const { manifest, runner } = templates;
    const defaultResources = prepareDefaultResources(
      manifest,
      settings.$Language
    );

    // Get current file sources to load
    const { styles, ...scripts } =
      settings?.$Resources?.(response, manifest, defaultResources) ??
      defaultResources;

    return {
      _: {
        manifest,
        styles,
        scripts,
      },
      // Add slashes to "" to fix terser minification on runner code.
      resources: JSON.stringify(scripts).replace(/"/g, '\\"'),
      revivalSettings: renderScript(
        'revival-settings',
        _getRevivalSettings({ response, settings })
      ),
      revivalCache: renderScript(
        'revival-cache',
        _getRevivalCache({ response })
      ),
      runner: renderScript('runner', runner),
      styles: renderStyles(styles),
      meta: renderMeta(metaManager),
    };
  }

  /**
   * Processes resposne content containing content variables #{...} placeholders,
   * which are replaced by the contents of the variables. The replacement
   * is done recursively, until there are no placeholders to interpolate.
   *
   * Additionally to content variables, you can use any value from bootConfig
   * which is included in the interpolation process.
   *
   * @param event IMA hooks server event.
   * @returns string Processed response content.
   */
  function processContent({ context }) {
    const { response, bootConfig } = context;

    if (!response?.content || !bootConfig) {
      return response?.content;
    }

    const { settings } = bootConfig;
    const extendedSettings = { ...settings, ...response.contentVariables };
    const interpolate = (_, envKey) => extendedSettings[envKey] ?? '';

    while (response.content.match(contentInterpolationRe)) {
      response.content = response.content.replace(
        contentInterpolationRe,
        interpolate
      );
    }

    return response.content;
  }

  return {
    createContentVariables,
    processContent,
    sendResponseHeaders,
    _prepareCookieOptionsForExpress,
  };
};
