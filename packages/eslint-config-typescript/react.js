module.exports = {
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "@banterstudiosuk/eslint-config/react",
    "eslint-config-prettier/@typescript-eslint",
    "./rules/typescript",
    "./rules/react",
    "./rules/import",
    "./settings",
  ].map(require.resolve),
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es6: true,
  },
};
