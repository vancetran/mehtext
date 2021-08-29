import { capitalize } from './textTransform'

test('text is capitalized', () => {
  expect(capitalize('word')).toBe('WORD')
})
