import { StatsError } from 'webpack';

import { getEventSource, HMRMessageData } from './EventSourceWrapper';
import { getHMREmitter, HMREmitter } from './HMREmitter';
import { getIndicator } from './IndicatorWrapper';
import { Logger } from './Logger';

const FAILURE_STATUSES = ['abort', 'fail'];
const HMR_DOCS_URL = 'https://webpack.js.org/concepts/hot-module-replacement/';

export interface HMROptions {
  name: 'server' | 'client' | 'client.es';
  timeout: number;
  noInfo: boolean;
  reload: boolean;
  port: number;
  hostname: string;
  publicUrl: string;
}

/**
 * Parses options provided through webpack import query with defaults.
 */
export function parseOptions(): HMROptions {
  const queryEntries = Object.fromEntries(new URLSearchParams(__resourceQuery));

  if (!queryEntries['name']) {
    throw Error(
      `[HMR] Invalid name provided: ${queryEntries['name']}, it must match one of the webpack configuration names and is required.`
    );
  }

  return {
    name: queryEntries['name'] as HMROptions['name'],
    timeout: parseInt(queryEntries['timeout']) || 3000,
    noInfo: queryEntries['noInfo'] ? queryEntries['noInfo'] === 'true' : false,
    reload: queryEntries['reload'] ? queryEntries['reload'] === 'true' : false,
    port: 3101,
    hostname: 'localhost',
    publicUrl: 'http://localhost:3101',
  };
}

/**
 * Initializes EventSource, Indicator icon, ErrorOverlay and it's emitter.
 */
export function init() {
  const options = parseOptions();
  const logger = new Logger(options);
  const overlayScriptEl = document.createElement('script');

  // Init instances
  const instances = {
    options,
    eventSource: getEventSource(options, logger),
    indicator: getIndicator(),
    emitter: getHMREmitter(),
    logger,
  };

  // Init ErrorOverlay
  overlayScriptEl.setAttribute(
    'src',
    `${options.publicUrl}/__error-overlay-static/js/overlay.js`
  );
  overlayScriptEl.onload = () => {
    const imaErrorOverlay = document.createElement('ima-error-overlay');
    imaErrorOverlay.setAttribute('public-url', options.publicUrl);
    document.body.appendChild(imaErrorOverlay);
  };
  document.body.appendChild(overlayScriptEl);

  return instances;
}

/**
 * Parses string version of webpack StatsError back to object version
 * https://github.com/webpack-contrib/webpack-hot-middleware/blob/master/middleware.js#L174
 */
export function parseEventSourceError(error: string): StatsError {
  const [moduleName, ...restError] = error.split(' ');
  const [loc, ...restErrorMessage] = restError.join(' ').split('\n');
  const message = restErrorMessage.join('\n');

  return {
    moduleIdentifier: moduleName,
    loc,
    message,
  };
}

/**
 * Compares given hash with current webpack compilation hash. This let's
 * us know if we are up to date with all hot updates with current compilation.
 */
export const isUpToDate = (() => {
  let lastHash = __webpack_hash__;

  return (hash?: HMRMessageData['hash']) => {
    if (hash) {
      lastHash = hash;
    }

    return lastHash === __webpack_hash__;
  };
})();

/**
 * Based on:
 *
 * - https://github.com/webpack/webpack/blob/main/hot/log-apply-result.js
 * - https://github.com/webpack-contrib/webpack-hot-middleware/blob/master/client.js
 */
export async function processUpdate({
  logger,
  options,
  hash,
  emitter,
}: {
  hash: HMRMessageData['hash'];
  options: HMROptions;
  logger: Logger;
  emitter: HMREmitter;
}) {
  try {
    // Check for updates
    const updatedModules = await module.hot?.check();

    if (!updatedModules) {
      logger.warn('Cannot find update. Need to do a full reload!');
      logger.warn('(Probably because of restarting the webpack-dev-server)');

      return options.reload && window.location.reload();
    }

    // TODO needs better solution
    // Kill ima app before hot reloading
    if (
      updatedModules.some(
        filePath => typeof filePath === 'string' && /(js|ts)$/.test(filePath)
      )
    ) {
      logger.info('Destroying IMA app');
      emitter.emit('destroy');
    }

    // Apply changes to modules
    const renewedModules = await module.hot?.apply({
      ignoreUnaccepted: true,
      ignoreDeclined: true,
      ignoreErrored: true,
      onUnaccepted: data => {
        logger.warn(
          'Ignored an update to unaccepted module ' + data.chain?.join(' -> ')
        );
      },
      onDeclined: data => {
        logger.warn(
          'Ignored an update to declined module ' + data.chain?.join(' -> ')
        );
      },
      onErrored: data => {
        logger.error(data.error);
        logger.warn(
          'Ignored an error while updating module ' +
            data.moduleId +
            ' (' +
            data.type +
            ')'
        );
      },
    });

    const unacceptedModules = updatedModules.filter(moduleId => {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    // Log unaccepted modules info
    if (unacceptedModules.length > 0) {
      logger.group(
        `The following modules couldn't be hot updated: (Full reload needed)\n\nThis is usually because the modules which have changed (and their parents) do not know how to hot reload themselves. See ${HMR_DOCS_URL} for more details.`
      );
      unacceptedModules.forEach(module => console.log(module));
      console.groupEnd();

      return options.reload && window.location.reload();
    }

    // Log updated modules info
    if (!renewedModules || renewedModules.length === 0) {
      logger.info('Nothing hot updated');
    } else if (!options.noInfo) {
      logger.group('Updated modules:');
      renewedModules.forEach(module => console.log(module));
      console.groupEnd();
    }

    // Check if all is up to date
    if (!isUpToDate()) {
      processUpdate({
        hash,
        options,
        logger,
        emitter,
      });
    } else {
      logger.info('App is up to date');
    }
  } catch (error) {
    const status = module.hot?.status();

    if (status && FAILURE_STATUSES.includes(status)) {
      logger.warn('Cannot check for update. Need to do a full reload!', error);

      return options.reload && window.location.reload();
    } else {
      logger.warn('Update check failed: ', error);
    }
  }
}
