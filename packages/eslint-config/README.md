# `@banterstudiosuk/eslint-config`

> My ESLint / Prettier configuration used for various projects. A React specific config is also available.


## Install Peer Dependencies
```bash
  yarn add -D @babel/core@^7.14.5 \
    @babel/eslint-parser@^7.14.5 \
    eslint@^7.28.0 \
    eslint-plugin-import@^2.23.4 \
    eslint-plugin-jest@^24.3.6 \
    eslint-plugin-jsx-a11y@^6.4.1 \
    eslint-plugin-prettier@^3.4.0 \
    eslint-plugin-react@^7.24.0 \
    eslint-plugin-react-hooks@^4.2.0 \
    prettier@^2.3.1
```

## Install

### npm

```bash
npm i --save @banterstudiosuk/eslint-config
```

### yarn
```bash
yarn add -D @banterstudiosuk/eslint-config
```

## Usage

### Include the main linter
```bash
{
  extends: ["@banterstudiosuk/eslint-config"]
}
```

### With React
```bash
{
  extends: ["@banterstudiosuk/eslint-config/react"]
}

## License

MIT