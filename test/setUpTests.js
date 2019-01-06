const Adapter = require('enzyme-adapter-react-16')
const { configure } = require('enzyme')

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
})

process.on('unhandledRejection', (error) => console.log(error)) // eslint-disable-line
