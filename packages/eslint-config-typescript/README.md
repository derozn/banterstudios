# `eslint-config-typescript`

> My Typescript ESLint / Prettier configuration used for various projects. A React specific config is also available.


## Install Peer Dependencies
```bash
  yarn add -D @typescript-eslint/parser@^2.31.0 \
    @typescript-eslint/eslint-plugin@^2.31.0 \
    eslint@^6.8.0 \
    eslint-plugin-import@^2.20.1 \
    eslint-plugin-jest@^23.8.2 \
    eslint-plugin-jsx-a11y@^6.2.3 \
    eslint-plugin-prettier@^3.1.2 \
    eslint-plugin-react@^7.18.3 \
    eslint-plugin-react-hooks@^2.0.0 \
    prettier@^1.18.2 \
    typescript@^3.8.3
```

## Install

### npm

```bash
npm i --save @banterstudiosuk/eslint-config-typescript
```

### yarn
```bash
yarn add -D @banterstudiosuk/eslint-config-typescript
```

## Usage

### Include the main linter
> It's important you specify a typescript parser i.e @typescript-eslint/parser

> Be sure to include a parserOptions.project which points to your tsconfig.json

```bash
{
  parser: "@typescript-eslint/parser",
  extends: ["@banterstudiosuk/eslint-config-typescript"],
  parserOptions: {
    project: "some-path-to/tsconfig.json"
  }
}
```

### With React
```bash
{
  parser: "@typescript-eslint/parser",
  extends: ["@banterstudiosuk/eslint-config-typescript/react"]
  parserOptions: {
    project: "some-path-to/tsconfig.json"
  }
}


## License

MIT