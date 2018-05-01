// @ts-check
// tslint:disable:no-magic-numbers
'use strict'

module.exports = { // tslint:disable-line:no-object-mutation
  'cyclomatic-complexity': false,
  deprecation: {severity: 'warn'},
  eofline: true,
  indent: [true, 'spaces', 2],
  'linebreak-style': [true, 'LF'],
  'max-classes-per-file': [true, 1],
  'max-file-line-count': {severity: 'warn', options: 400},
  'max-line-length': {severity: 'warn', options: 79},
  'no-default-export': true,
  'no-duplicate-imports': true,
  // until dynamic import is more readily available
  'no-require-imports': false,
  'object-literal-sort-keys': [true, 'shorthand-first'],
  'prefer-const': true,
  'trailing-comma': [true, {
    esSpecCompliant: true,
    multiline: {
      arrays: 'always',
      functions: 'always',
      objects: 'always',
      typeLiterals: 'ignore',
    },
    singleline: 'never',
  }],
}
