module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  babelrcRoots: [
    ".",
    "packages/*"
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { modules: 'cjs' }]
      ]
    }
  }
}
