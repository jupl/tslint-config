'use strict'

const rules = [
  require('./rules/eslint'),
  require('./rules/immutable'),
  require('./rules/typescript'),
  require('./rules/functionality'),
  require('./rules/maintainability'),
  require('./rules/style'),
]
const jsRules = [
  require('./rules/eslint/js'),
  require('./rules/immutable/js'),
  require('./rules/typescript/js'),
  require('./rules/functionality/js'),
  require('./rules/maintainability/js'),
  require('./rules/style/js'),
]

module.exports = { // tslint:disable-line:no-object-mutation
  extends: [
    'tslint-eslint-rules',
    'tslint-immutable',
  ],
  rules: Object.assign({}, ...jsRules, ...rules),
  jsRules: Object.assign({}, ...jsRules),
}
