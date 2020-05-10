module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint-config-airbnb-typescript",
    "eslint-config-prettier",
    "./rules/main",
    "./rules/prettier"
  ].map(require.resolve),
  plugins: ["jest"],
  env: {
    "jest/globals": true,
    browser: true
  }
};
