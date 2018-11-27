// @ts-check
'use strict'

module.exports = { // tslint:disable-line:no-object-mutation
  'member-ordering': [true, {order: [
    'public-static-field',
    'protected-static-field',
    'private-static-field',
    'public-instance-field',
    'protected-instance-field',
    'private-instance-field',
    'public-static-method',
    'protected-static-method',
    'private-static-method',
    'public-constructor',
    'protected-constructor',
    'private-constructor',
    'public-instance-method',
    'protected-instance-method',
    'private-instance-method',
  ]}],
  // import things like normalize.css
  'no-import-side-effect': false,
  'no-magic-numbers': false,
  'no-parameter-reassignment': true,
  'no-reference': true,
  'only-arrow-functions': [
    true,
    'allow-declarations',
    'allow-named-functions',
  ],
  'prefer-for-of': true,
  'promise-function-async': true,
}
