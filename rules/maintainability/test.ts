import {lintFixture} from '../../test-util'

test('Maintainability rules should be valid', async() => {
  const results = await lintFixture('maintainability.ts')
  expect(results).toMatchSnapshot()
})
