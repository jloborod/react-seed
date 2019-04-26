module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/enzyme.config.js'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  transformIgnorePatterns: ['/node_modules/(?!react)'],
  testURL: 'https://dev.constant.co',
};
