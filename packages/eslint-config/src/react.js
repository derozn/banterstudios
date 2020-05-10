module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
    "eslint-config-prettier",
    "./rules/main",
    "./rules/prettier",
    "./rules/react"
  ].map(require.resolve),
  plugins: ["jest"],
  env: {
    "jest/globals": true,
    browser: true
  }
};
