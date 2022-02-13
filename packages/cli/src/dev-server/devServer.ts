import path from 'path';

import hotMiddleware from '@gatsbyjs/webpack-hot-middleware';
import express from 'express';
import { Compiler } from 'webpack';
import devMiddleware from 'webpack-dev-middleware';

import { evalSourceMapMiddleware } from './evalSourceMapMiddleware';
import { openEditorMiddleware } from './openEditorMiddleware';

async function createDevServer(
  compiler: Compiler | undefined,
  hostname: string,
  port: number
) {
  if (!compiler) {
    return;
  }

  const app = express();
  const isVerbose = process.argv.some(arg => arg.includes('--verbose=true'));

  app
    .use((req, res, next) => {
      // Allow cors
      res.header('Access-Control-Allow-Origin', '*');

      next();
    })
    .use(
      devMiddleware(compiler, {
        index: false,
        publicPath: '/',
        writeToDisk: true,
        ...(isVerbose ? undefined : { stats: 'none' }),
        serverSideRender: true,
      })
    )
    .use(
      hotMiddleware(compiler, {
        ...(isVerbose ? undefined : { quite: true, log: false }),
        path: '/__webpack_hmr',
        heartbeat: 5000,
      })
    )
    .use('/__get-internal-source', evalSourceMapMiddleware())
    .use('/__open-editor', openEditorMiddleware())
    .use(
      '/__error-overlay-static',
      express.static(
        path.resolve(path.join(__dirname, '../../../error-overlay/dist/'))
      )
    )
    .listen(port, hostname);
}

export { createDevServer };
