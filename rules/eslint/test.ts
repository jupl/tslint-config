import {lintFixture} from '../../test-util'

describe('ESLint rules', () => {
  it('should be valid for TS', async() => {
    const results = await lintFixture('eslint.ts')
    expect(results).toMatchSnapshot()
  })

  it('should be valid for JS', async() => {
    const results = await lintFixture('eslint-js.js')
    expect(results).toMatchSnapshot()
  })
})
