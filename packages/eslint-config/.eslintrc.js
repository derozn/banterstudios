module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      configFile: "../../babel.config.js",
    },
  },
  ...require("./react"),
};
