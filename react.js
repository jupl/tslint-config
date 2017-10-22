'use strict'

const rules = [
  require('./rules/react'),
]
const jsRules = [
  require('./rules/react/js'),
]

module.exports = {
  extends: 'tslint-react',
  rules: Object.assign({}, ...jsRules, ...rules),
  jsRules: Object.assign({}, ...jsRules),
}
