// @ts-check
'use strict'

const rules = [
  require('./rules/jsx'),
]
const jsRules = [
  require('./rules/jsx/js'),
]

module.exports = { // tslint:disable-line:no-object-mutation
  extends: 'tslint-react',
  jsRules: Object.assign({}, ...jsRules),
  rules: Object.assign({}, ...jsRules, ...rules),
}
