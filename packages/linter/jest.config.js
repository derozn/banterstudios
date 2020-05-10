const base = require("../../test/jest.config.base");
const { name } = require("./package.json");

module.exports = {
  ...base,
  name,
  displayName: name,
  rootDir: "../../"
};
