module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
    "eslint-config-prettier",
    "prettier/react",
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
