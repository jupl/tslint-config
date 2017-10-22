import {lintFixture} from '../../test-util'

test('JSX rules should be valid', async() => {
  const results = await lintFixture('jsx.tsx')
  expect(results).toMatchSnapshot()
})
