# `@banterstudiosuk/use-camera`

> React hook to display and take a picture using users webcam

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom` at `^16.7.0-alpha.0`

## Install

### npm

```bash
npm i --save @banterstudiosuk/use-camera
```

## Usage

```jsx
import useCamera from '@banterstudiosuk/use-camera'

const SomeComponent = () => {
  const {
    innerWidth,
    innerHeight,
    outerWidth,
    outerHeight
  } = useWindowResize()

  return (
    <code>
      innerWidth: {innerWidth}
      innerHeight: {innerHeight}
      outerWidth: {outerWidth}
      outerHeight: {outerHeight}
    </code>
  )
}
```

## License

MIT