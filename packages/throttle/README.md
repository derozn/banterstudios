# `@banterstudiosuk/throttle`

> Throttle function

## Install

### npm

```bash
npm i --save @banterstudiosuk/throttle
```

## Usage

```js
import throttle from '@banterstudiosuk/throttle'

const handleScroll = () => console.log('scrolling')

const throttledFn = throttle(handleScroll, 100)

window.addEventListener('scroll', throttledFn, false)
```

## License

MIT