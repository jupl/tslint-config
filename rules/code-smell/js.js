// @ts-check
// tslint:disable:no-magic-numbers
'use strict'

module.exports = { // tslint:disable-line:no-object-mutation
  'cognitive-complexity': {severity: 'warn'},
  'mccabe-complexity': {severity: 'warn'},
  'no-accessor-field-mismatch': true,
  // covered by immutable/no-object-mutation
  'no-array-delete': false,
  'no-big-function': {severity: 'warn'},
  'no-commented-code': {severity: 'warn'},
  'no-dead-store': true,
  'no-duplicate-string': true,
  // covered by bug/no-identical-conditions
  'no-duplicated-branches': false,
  // covered by functionality/no-empty
  'no-empty-nested-blocks': false,
  // covered by eslint/no-extra-semi
  'no-extra-semicolon': false,
  'no-gratuitous-expressions': true,
  'no-hardcoded-credentials': true,
  'no-identical-functions': true,
  // covered by typescript's noImplicitReturns
  'no-inconsistent-return': false,
  'no-multiline-string-literals': true,
  'no-nested-incdec': true,
  'no-redundant-boolean': true,
  'no-redundant-parentheses': true,
  'no-return-type-any': true,
  'no-same-line-conditional': true,
  'no-small-switch': true,
  'no-statements-same-line': true,
  'no-unconditional-jump': true,
  'no-unenclosed-multiline-block': true,
  'no-unused-array': true,
  'no-useless-cast': true,
  'no-variable-usage-before-declaration': true,
  'parameters-max-number': [true, 3],
  'prefer-immediate-return': true,
}
