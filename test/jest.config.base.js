module.exports = {
  modulePaths: [
    "<rootDir>"
  ],
  collectCoverage: true,
  verbose: true,
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: ["src/**/*{js,jsx}", "!src/**/*.stories.js"],
  setupTestFrameworkScriptFile: "<rootDir>/test/jest.setup.js",
  transform: {
    "^.+\\.jsx?$": "<rootDir>/test/wrapper.js"
  }
}
