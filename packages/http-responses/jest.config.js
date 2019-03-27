const base = require('../../test/jest.config.base')
const { name } = require('./package.json')

module.exports = {
  ...base,
  name: name,
  displayName: name,
  rootDir: '../../'
}
