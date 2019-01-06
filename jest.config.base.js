module.exports = {
  modulePaths: [
    "<rootDir>"
  ],
  collectCoverage: true,
  verbose: true,
  coverageDirectory: "<rootDir>/coverage/",
  setupTestFrameworkScriptFile: "<rootDir>/test/setUpTests.js",
  transform: {
    "^.+\\.jsx?$": "<rootDir>/test/wrapper.js"
  }
}
