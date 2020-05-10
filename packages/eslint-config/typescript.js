module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "@typescript-eslint/recommended",
    "eslint-config-airbnb-typescript",
    "eslint-config-prettier",
    "prettier/@typescript-eslint",
    "./rules/main",
    "./rules/prettier",
  ].map(require.resolve),
  plugins: ["jest"],
  env: {
    "jest/globals": true,
    browser: true
  }
};
