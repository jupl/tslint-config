// @ts-check
'use strict'

module.exports = { // tslint:disable-line:no-object-mutation
  'await-promise': true,
  'no-floating-promises': true,
  // can vary per project
  'no-inferred-empty-object-type': false,
  'no-misused-new': true,
  'no-object-literal-type-assertion': true,
  'no-unbound-method': true,
  // javascript interop
  'no-unsafe-any': false,
  // covered by typescript's noUnusedLocals and noUnusedParameters
  'no-unused-variable': false,
  'strict-boolean-expressions': true,
  'strict-type-predicates': true,
  'use-default-type-parameter': true,
}
