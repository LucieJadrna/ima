/**
 * Temporary fix for file extensions requiremen in module resolution for esm modules
 * https://nodejs.org/api/esm.html#mandatory-file-extensions
 */
function modifyWebpackConfig(config) {
  config.module.rules.push(
    {
      /**
       * Allow interop import of .mjs modules.
       */
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
  );

  config.externalsPresets = {
    node: true,
  };

  return config;
};

module.exports = [
  {
    limit: '30 KB',
    path: './dist/esm/client/index.js',
    import: '{ onLoad, reviveClientApp }',
    running: false,
    modifyWebpackConfig,

  },
  {
    limit: '30 KB',
    path: './dist/esm/server/index.js',
    import: '*',
    running: false,
    modifyWebpackConfig,
  },
  // Test tree-shaking
  {
    limit: '80 B',
    path: './dist/esm/client/index.js',
    import: '{ Cache }',
    running: false,
    modifyWebpackConfig,
  }
];
