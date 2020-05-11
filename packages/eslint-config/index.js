module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "eslint-config-prettier",
    "./rules/main",
    "./rules/prettier",
  ].map(require.resolve),
  plugins: ["jest"],
  env: {
    "jest/globals": true,
    browser: true,
  },
};
