import { capitalize, sarcastic } from './textTransform'

describe('textTransform', ()=>{

  describe('capitalize', () => {
    test('text is capitalized', () => {
      expect(capitalize('word')).toBe('WORD')
    })
  })

  describe('sarcastic', () => {
    test('text output is in predictable alternating case when random is false', () => {
      expect(sarcastic('word', false)).toBe('WoRd')
    })
  })

}


)


