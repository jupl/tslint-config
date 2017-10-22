'use strict'

const rules = [
  require('./rules/jsx'),
]
const jsRules = [
  require('./rules/jsx/js'),
]

module.exports = { // tslint:disable-line:no-object-mutation
  extends: 'tslint-react',
  rules: Object.assign({}, ...jsRules, ...rules),
  jsRules: Object.assign({}, ...jsRules),
}
