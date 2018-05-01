// @ts-check
'use strict'

module.exports = { // tslint:disable-line:no-object-mutation
  ban: [true, 'alert'],
  curly: true,
  forin: true,
  // nothing to ban so far
  'import-blacklist': false,
  'label-position': true,
  'no-arg': true,
  'no-bitwise': true,
  'no-conditional-assignment': true,
  // can vary per project
  'no-console': false,
  'no-construct': true,
  'no-debugger': true,
  'no-duplicate-super': true,
  // covered by bug/no-identical-conditions
  'no-duplicate-switch-case': false,
  // covered by functionality/no-var-keyword
  'no-duplicate-variable': false,
  // can vary per project
  'no-dynamic-delete': false,
  'no-empty': true,
  'no-eval': true,
  'no-for-in-array': true,
  'no-implicit-dependencies': [true, 'dev', 'optional'],
  'no-invalid-template-strings': true,
  'no-invalid-this': [true, 'check-function-in-method'],
  'no-null-keyword': true,
  'no-return-await': true,
  'no-shadowed-variable': true,
  'no-sparse-arrays': true,
  'no-string-literal': true,
  'no-string-throw': true,
  // can vary per project
  'no-submodule-imports': false,
  'no-switch-case-fall-through': true,
  'no-this-assignment': true,
  'no-unnecessary-class': true,
  'no-unsafe-finally': true,
  'no-unused-expression': [
    true,
    'allow-fast-null-checks',
    'allow-tagged-template',
  ],
  // covered by functionality/no-var-keyword
  'no-use-before-declare': false,
  'no-var-keyword': true,
  'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
  'prefer-conditional-expression': true,
  'prefer-object-spread': true,
  radix: true,
  'restrict-plus-operands': true,
  'switch-default': true,
  'triple-equals': [true, 'allow-undefined-check'],
  // covered by functionality/strict-type-predicates
  'typeof-compare': false,
  'use-isnan': true,
}
