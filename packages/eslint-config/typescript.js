module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "eslint-config-airbnb-typescript",
    "eslint-config-prettier",
    "eslint-config-prettier/@typescript-eslint",
    "./rules/main",
    "./rules/prettier",
  ].map(require.resolve),
  env: {
    "jest/globals": true,
    browser: true
  },
  parserOptions: {
    project: './tsconfig.json'
  }
};
