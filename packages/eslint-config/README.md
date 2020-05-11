# `@banterstudiosuk/eslint-config`

> My ESLint / Prettier configuration used for various projects. A React specific config is also available.


## Install Peer Dependencies
```bash
  yarn add -D eslint prettier \
              babel-eslint \
              eslint-plugin-import@^2.20.1 \
              eslint-plugin-jest@^23.8.2 \
              eslint-plugin-jsx-a11y@^6.2.3 \
              eslint-plugin-prettier@^3.1.2 \
              eslint-plugin-react@^7.18.3 \
              eslint-plugin-react-hooks@^2.0.0
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