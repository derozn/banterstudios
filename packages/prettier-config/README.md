# `@banterstudiosuk/prettier-config`

> prettier config used within internal projects

## Install

### npm

```bash
npm i --save @banterstudiosuk/prettier-config
```

### yarn
```bash
yarn add -D @banterstudiosuk/prettier-config
```

## Usage

### .prettierrc.json
```json
"@banterstudios/prettier-config"
```

### .prettierrc.js
```js
module.exports = require('@banterstudios/prettier-config')
```
or
```js
module.exports = {
  ...require('@banterstudios/prettier-config')
  // Rest of your custom rules.
}
```

## License

MIT