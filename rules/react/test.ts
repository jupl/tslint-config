import {lintFixture} from '../../test-util'

test('React rules should be valid', async() => {
  const results = await lintFixture('react.tsx')
  expect(results).toMatchSnapshot()
})
