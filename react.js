'use strict'

const rules = [
  require('./rules/react'),
]
const jsRules = [
  require('./rules/react/js'),
]

module.exports = { // tslint:disable-line:no-object-mutation
  extends: 'tslint-react',
  rules: Object.assign({}, ...jsRules, ...rules),
  jsRules: Object.assign({}, ...jsRules),
}
