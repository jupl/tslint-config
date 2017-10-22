import {lintFixture} from '../../test-util'

test('Immutable rules should be valid', async() => {
  const results = await lintFixture('immutable.ts')
  expect(results).toMatchSnapshot()
})
