// @ts-check
'use strict'

const rules = [
  require('./rules/bug'),
  require('./rules/code-smell'),
  require('./rules/eslint'),
  require('./rules/immutable'),
  require('./rules/typescript'),
  require('./rules/functionality'),
  require('./rules/maintainability'),
  require('./rules/style'),
]
const jsRules = [
  require('./rules/bug/js'),
  require('./rules/code-smell/js'),
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
    'tslint-sonarts',
  ],
  jsRules: Object.assign({}, ...jsRules),
  rules: Object.assign({}, ...jsRules, ...rules),
}
