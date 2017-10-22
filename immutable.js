'use strict'

const rules = [
  require('./rules/immutable'),
]
const jsRules = [
  require('./rules/immutable/js'),
]

module.exports = {
  extends: 'tslint-immutable',
  rules: Object.assign({}, ...jsRules, ...rules),
  jsRules: Object.assign({}, ...jsRules),
}
