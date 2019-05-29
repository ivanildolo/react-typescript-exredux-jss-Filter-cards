module.exports = {
  reactHotLoader: true,
  source: 'application',
  outputPath: '',
  nodeEnv: {},
  htmlEnv: {},
  port: 0,
  hostname: '',
  jest: {
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
    moduleNameMapper: {
      '@components/(.*)': '<rootDir>/src/components/$1',
      '@containers/(.*)': '<rootDir>/src/containers/$1',
      '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
      '@services/(.*)': '<rootDir>/src/services/$1',
    },
    updateSnapshot: true,
  },
};