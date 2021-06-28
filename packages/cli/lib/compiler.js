const chalk = require('chalk');
const webpack = require('webpack');

const { VerboseOptions } = require('../constants');
const { error, warn, info } = require('./print');

async function closeCompiler(compiler) {
  return new Promise((resolve, reject) =>
    compiler.close(closeError => (closeError ? reject(closeError) : resolve()))
  );
}

function handleStats(stats, verbose) {
  const statsOptions = {
    assets: true,
    cached: false,
    children: false,
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: true,
    modules: false,
    reasons: false,
    source: false,
    timings: true,
    version: true
  };

  // Print raw webpack log
  if (verbose === VerboseOptions.RAW) {
    return console.log(stats.toString(statsOptions));
  }

  const { children, errors = [], warnings = [] } = stats.toJson(statsOptions);

  // Errors
  if (stats.hasErrors()) {
    return errors.forEach(({ compilerPath, message, details }) => {
      error(
        `[${compilerPath}] - ${message} ${
          verbose && details ? '\n' + details : ''
        }`,
        true
      );
    });
  }

  // Output
  const server = children.find(({ name }) => name === 'server');
  const client = children.find(({ name }) => name === 'client');
  const others = children.filter(
    ({ name }) => ~['client', 'server'].indexOf(name)
  );

  info(
    `Compilation was ${chalk.bold.green(
      'successful'
    )} using webpack version: ${chalk.bold.magenta((client || server).version)}`
  );
  server &&
    info(
      `[${server.name}] Compiled in ${chalk.green(
        server.time.toLocaleString() + ' ms'
      )}`
    );
  client &&
    info(
      `[${client.name}] Compiled in ${chalk.green(
        client.time.toLocaleString() + ' ms'
      )}`
    );
  // TODO handle others
  others && info(`others compiled too...`);
  info(
    `Following chunks were saved to ${chalk.green(
      (client || server).outputPath
    )}:`
  );

  // Print chunk file size info
  children.forEach(child => {
    Object.keys(child.namedChunkGroups).forEach(chunkKey => {
      child.namedChunkGroups[chunkKey].assets.forEach(({ name, size }) => {
        console.log(
          ` ├ ${name}  ${chalk.green(
            (size / 1024).toFixed(1).toLocaleString() + ' kiB'
          )}`
        );
      });
    });
  });

  // Warnings
  warnings.forEach(({ compilerPath, message, details }) => {
    warn(
      `[${compilerPath}]\n${message} ${
        verbose && details ? '\n' + details : ''
      }`,
      true
    );
  });
}

async function runCompiler(config, verbose = VerboseOptions.DEFAULT) {
  return new Promise((resolve, reject) => {
    const compiler = webpack(config);
    compiler.run((error, stats) =>
      closeCompiler(compiler).then(() => {
        if (error) {
          reject(error);
        }

        handleStats(stats, verbose);
        resolve(stats);
      })
    );
  });
}

async function watchCompiler(
  config,
  verbose = VerboseOptions.DEFAULT,
  watchOptions = {}
) {
  let firstRun = true;

  return new Promise((resolve, reject) => {
    const compiler = webpack(config);
    compiler.watch(watchOptions, (error, stats) => {
      if (error) {
        reject(error);
      }

      if (firstRun) {
        firstRun = false;
        handleStats(stats, verbose);
      }

      resolve(stats);
    });
  });
}

function handleCompilationError(err) {
  error('Unexpected error occurred');
  err && error(err.stack || err);
  err?.details && error(err.details);
}

module.exports = {
  closeCompiler,
  runCompiler,
  watchCompiler,
  handleCompilationError
};
