// @ts-check
// tslint:disable:no-magic-numbers
'use strict'

module.exports = { // tslint:disable-line:no-object-mutation
  'array-bracket-spacing': [true, 'never'],
  'block-spacing': [true, 'always'],
  'brace-style': [true, 'stroustrup', {allowSingleLine: true}],
  // situational
  'handle-callback-err': false,
  'no-constant-condition': true,
  'no-control-regex': true,
  // covered by bug/no-identical-conditions
  'no-duplicate-case': false,
  'no-empty-character-class': true,
  'no-ex-assign': true,
  'no-extra-boolean-cast': true,
  'no-extra-semi': true,
  'no-inner-declarations': [true, 'both'],
  'no-invalid-regexp': true,
  'no-multi-spaces': true,
  'no-regex-spaces': true,
  'no-unexpected-multiline': true,
  'object-curly-spacing': [true, 'never'],
  // covered by style/ordered-imports
  'sort-imports': false,
  // covered by style/space-within-parens
  'space-in-parens': false,
  // covered by style/arrow-return-shorthand
  'ter-arrow-body-style': false,
  // covered by style/arrow-parens
  'ter-arrow-parens': false,
  // covered by style/whitespace
  'ter-arrow-spacing': false,
  'ter-computed-property-spacing': [true, 'never'],
  'ter-func-call-spacing': [true, 'never'],
  'ter-indent': [true, 2],
  // covered by maintainability/max-line-length
  'ter-max-len': false,
  // not needed for small code blocks
  'ter-newline-after-var': false,
  // covered by style/no-irregular-whitespace
  'ter-no-irregular-whitespace': false,
  // can vary per project
  'ter-no-mixed-spaces-and-tabs': false,
  // covered by functionality/no-sparse-arrays
  'ter-no-sparse-arrays': false,
  'ter-no-tabs': true,
  'ter-padded-blocks': [true, {blocks: 'never', switch: 'never'}],
  // valid use cases
  'ter-prefer-arrow-callback': false,
  'valid-jsdoc': [true, {
    matchDescription: '.+',
    requireParamDescription: true,
    requireParamType: true,
    requireReturn: false,
    requireReturnDescription: true,
    requireReturnType: true,
  }],
  // covered by functionality/strict-type-predicates
  'valid-typeof': false,
}
