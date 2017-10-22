import {lintFixture} from '../../test-util'

test('Immutable rules should be valid', async() => {
  const results = await lintFixture('functionality.ts')
  expect(results).toMatchSnapshot()
})
