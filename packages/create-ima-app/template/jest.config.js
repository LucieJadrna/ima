module.exports = {
  bail: true,
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/'],
  setupFiles: ['@ima/core/setupJest.js', '<rootDir>/setupJest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: '(/__tests__/).*(Spec|Integration)\\.jsx?$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '@ima/react-page-renderer/dist/esm/client/renderer/ClientPageRenderer':
      '@ima/react-page-renderer/dist/cjs/renderer/ClientPageRenderer',
  },
  transform: {
    '^.+\\.jsx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'ecmascript',
            jsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  verbose: true,
};
