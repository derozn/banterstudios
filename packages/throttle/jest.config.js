const base = require('../../jest.config.base.js')
const { name } = require('./package.json')

module.exports = {
  ...base,
  name: name,
  displayName: name,
  rootDir: '../../'
}
