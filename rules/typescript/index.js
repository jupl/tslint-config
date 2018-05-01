// @ts-check
'use strict'

module.exports = { // tslint:disable-line:no-object-mutation
  'adjacent-overload-signatures': true,
  'ban-comma-operator': true,
  // nothing to ban so far
  'ban-types': false,
  'member-access': [true, 'no-public'],
  'no-any': true,
  'no-empty-interface': true,
  'no-inferrable-types': true,
  'no-internal-module': true,
  'no-namespace': true,
  // some scenarios are needed. maybe warn?
  'no-non-null-assertion': false,
  'no-unnecessary-type-assertion': true,
  'no-var-requires': true,
  typedef: true,
  'typedef-whitespace': [
    true,
    {
      'call-signature': 'nospace',
      'index-signature': 'nospace',
      parameter: 'nospace',
      'property-declaration': 'nospace',
      'variable-declaration': 'nospace',
    },
    {
      'call-signature': 'onespace',
      'index-signature': 'onespace',
      parameter: 'onespace',
      'property-declaration': 'onespace',
      'variable-declaration': 'onespace',
    },
  ],
  'unified-signatures': true,
}
