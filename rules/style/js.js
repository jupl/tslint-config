// @ts-check
'use strict'

module.exports = { // tslint:disable-line:no-object-mutation
  align: [true, 'parameters', 'statements', 'elements', 'members'],
  'arrow-parens': [true, 'ban-single-arg-parens'],
  'arrow-return-shorthand': [true, 'multiline'],
  'binary-expression-operand-order': true,
  'class-name': true,
  'comment-format': [true, 'check-space'],
  'completed-docs': {
    options: {
      classes: {visibilities: ['exported']},
      enums: {visibilities: ['exported']},
      functions: {visibilities: ['exported']},
      interfaces: {visibilities: ['exported']},
      methods: {locations: ['all'], privacies: ['protected', 'public']},
      namespaces: {visibilities: ['exported']},
      properties: {locations: ['all'], privacies: ['protected', 'public']},
      types: {visibilities: ['exported']},
      variables: {visibilities: ['exported']},
    },
    severity: 'warn',
  },
  encoding: true,
  // can vary per project
  'file-header': false,
  'file-name-casing': [true, 'kebab-case'],
  'import-spacing': true,
  'jsdoc-format': [true, 'check-multiline-start'],
  'new-parens': true,
  // overkill for small blocks
  'newline-before-return': false,
  // would be nice if there was a limit
  'newline-per-chained-call': false,
  'no-consecutive-blank-lines': true,
  'no-irregular-whitespace': true,
  'no-trailing-whitespace': true,
  'no-unnecessary-callback-wrapper': true,
  'number-literal-format': true,
  'object-literal-key-quotes': [true, 'as-needed'],
  'object-literal-shorthand': true,
  // prefer opposite
  'one-line': false,
  // prefer opposite
  'one-variable-per-declaration': false,
  'ordered-imports': [true, {
    'import-sources-order': 'lowercase-last',
    'named-imports-order': 'lowercase-last',
  }],
  'prefer-function-over-method': {
    options: [
      'allow-public',
      'allow-protected',
    ],
    severity: 'warn',
  },
  'prefer-method-signature': true,
  'prefer-switch': true,
  'prefer-template': true,
  quotemark: [true, 'single', 'jsx-double', 'avoid-escape'],
  'return-undefined': true,
  semicolon: [true, 'never'],
  'space-before-function-paren': [true, 'never'],
  'space-within-parens': [true, 0],
  'switch-final-break': [true, 'always'],
  'variable-name': [
    true,
    'ban-keywords',
    'check-format',
    'allow-leading-underscore',
    'allow-pascal-case',
  ],
  whitespace: [
    true,
    'check-decl',
    'check-operator',
    'check-separator',
    'check-type',
    'check-type-operator',
    'check-preblock',
  ],
}
