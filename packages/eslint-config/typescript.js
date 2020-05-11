module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint-config-airbnb-typescript",
    "eslint-config-prettier",
    "eslint-config-prettier/@typescript-eslint",
    "./rules/main",
    "./rules/prettier",
  ].map(require.resolve),
  plugins: ["@typescript-eslint", "jest"],
  env: {
    "jest/globals": true,
    browser: true
  }
};
