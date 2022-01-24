import { Arguments, CommandBuilder } from 'yargs';

import { CliArgs, HandlerFn, ImaCliCommand } from '../types';
import { requireImaConfig } from '../webpack/utils';

const IMA_CLI_RUN_SERVER_MESSAGE = 'ima-cli-run-server-message';

/**
 * Initializes cli script handler function, which takes cli arguments,
 * parses them and defines defaults. Should be used to initialize any
 * cli command script, since it takes care of parsing mandatory arguments.
 *
 * @param {HandlerFn} handlerFn Cli script command handler.
 * @returns {void}
 */
function handlerFactory(handlerFn: HandlerFn) {
  return async (yargs: Arguments): Promise<void> => {
    const [command] = yargs._ || [];

    return await handlerFn({
      ...yargs,
      rootDir: process.cwd(),
      command: command.toString(),
    } as unknown as CliArgs);
  };
}

/**
 * Resolves additional cliArgs that can be provided with custom cli plugins
 * defined in the optional ima.config.js.
 *
 * @param {ImaCliCommand} Current command for which args are loaded.
 * @returns {CommandBuilder} Yargs commands object.
 */
function resolveCliPluginArgs(command: ImaCliCommand): CommandBuilder {
  const imaConfig = requireImaConfig();

  if (!imaConfig || !Array.isArray(imaConfig?.plugins)) {
    return {};
  }

  return imaConfig.plugins
    .filter(
      plugin => plugin?.cliArgs && Object.keys(plugin.cliArgs).length !== 0
    )
    .reduce((acc, cur) => {
      if (cur?.cliArgs && cur.cliArgs[command]) {
        acc = {
          ...acc,
          ...cur.cliArgs[command],
        };
      }

      return acc;
    }, {});
}

/**
 * Initializes shared args with their default values based
 * current CLI command.
 *
 * @param {ImaCliCommand} command Current CLI command identifier.
 * @returns {CommandBuilder} Object with shared args.
 */
function sharedArgsFactory(command: ImaCliCommand): CommandBuilder {
  return {
    clean: {
      desc: 'Clean build folder before building the application',
      type: 'boolean',
      default: command === 'build',
    },
    clearCache: {
      desc: 'Deletes node_modules/.cache directory to invalidate loaders cache',
      type: 'boolean',
    },
    verbose: {
      desc: 'Use default webpack CLI output instead of custom one',
      type: 'boolean',
    },
    publicPath: {
      desc: 'Webpack public path to specify base for all assets in the app',
      type: 'string',
    },
    ignoreWarnings: {
      desc: 'Webpack will no longer print warnings during compilation',
      type: 'boolean',
    },
  };
}

export {
  IMA_CLI_RUN_SERVER_MESSAGE,
  handlerFactory,
  resolveCliPluginArgs,
  sharedArgsFactory,
};
