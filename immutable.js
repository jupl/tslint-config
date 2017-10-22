'use strict'

const rules = [
  require('./rules/immutable'),
]
const jsRules = [
  require('./rules/immutable/js'),
]

module.exports = { // tslint:disable-line:no-object-mutation
  extends: 'tslint-immutable',
  rules: Object.assign({}, ...jsRules, ...rules),
  jsRules: Object.assign({}, ...jsRules),
}
