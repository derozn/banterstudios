module.exports = {
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "@banterstudiosuk/eslint-config",
    "./rules/typescript",
    "./rules/import",
    "./settings",
  ].map(require.resolve),
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es6: true,
  },
};
