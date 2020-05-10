module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
    "eslint-config-prettier",
    "eslint-config-prettier/react",
    "./rules/react"
  ].map(require.resolve),
  plugins: ["jest"],
  env: {
    "jest/globals": true,
    browser: true
  }
};
