'use strict'

const rules = [
  require('./rules/typescript'),
  require('./rules/functionality'),
  require('./rules/maintainability'),
  require('./rules/style'),
]
const jsRules = [
  require('./rules/eslint/js'),
  require('./rules/typescript/js'),
  require('./rules/functionality/js'),
  require('./rules/maintainability/js'),
  require('./rules/style/js'),
]

module.exports = {
  extends: 'tslint-eslint-rules',
  rules: Object.assign({}, ...jsRules, ...rules),
  jsRules: Object.assign({}, ...jsRules),
}
