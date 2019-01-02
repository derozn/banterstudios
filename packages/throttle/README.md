# `@banterstudios/throttle`

> Throttle function

## Install

### npm

```bash
npm i --save @banterstudios/throttle
```

## Usage

```js
import throttle from '@banterstudios/throttle'

const handleScroll = () => console.log('scrolling')

const throttledFn = throttle(handleScroll, 100)

window.addEventListener('scroll', throttledFn, false)
```

## License

MIT