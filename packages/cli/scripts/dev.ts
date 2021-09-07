import { CommandModule } from 'yargs';

import { DevArgs, HandlerFunction } from '../types';
import {
  handlerFactory,
  createWebpackConfig,
  SharedArgs
} from '../lib/cliUtils';
import { watchCompiler, handleCompilationError } from '../lib/compiler';
import { info } from '../lib/print';

const dev: HandlerFunction<DevArgs> = async args => {
  try {
    info('Parsing webpack configuration file...');
    const config = await createWebpackConfig(['client', 'server'], {
      ...args,
      isProduction: false,
      isWatch: true
    });

    info('Starting webpack compiler...');
    await watchCompiler(config, args);
  } catch (err) {
    handleCompilationError(err);
  }
};

const devCommand: CommandModule = {
  command: 'dev',
  describe: 'Run application in development watch mode',
  builder: {
    ...SharedArgs,
    open: {
      alias: 'o',
      desc: 'Opens browser window after server has been started',
      type: 'boolean',
      default: true
    }
  },
  handler: handlerFactory(dev)
};

export default devCommand;
