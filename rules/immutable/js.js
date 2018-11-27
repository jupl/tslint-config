// @ts-check
'use strict'

module.exports = { // tslint:disable-line:no-object-mutation
  'no-array-mutation': [true, 'ignore-mutation-following-accessor'],
  // classes may be necessary
  'no-class': false,
  // valid use cases(?)
  'no-delete': false,
  // valid use cases
  'no-expression-statement': false,
  // valid use cases
  'no-if-statement': false,
  // valid use cases
  'no-let': false,
  // valid use cases
  'no-loop-statement': false,
  // covered by immutable/no-object-mutation
  'no-method-signature': false,
  // can vary per project
  'no-mixed-interface': false,
  'no-object-mutation': true,
  // classes may be necessary
  'no-this': false,
  'no-throw': false,
  'no-try': false,
  // covered by immutable/no-object-mutation
  'readonly-array': false,
  // covered by immutable/no-object-mutation
  'readonly-keyword': false,
}
