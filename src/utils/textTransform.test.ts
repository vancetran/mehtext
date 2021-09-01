import { capitalize, clapback, sarcastic } from './textTransform'

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

  describe('clapback', () => {
    test('each word is separated by a clap emoji', () => {
      expect(clapback('Stop Emphasizing Your Point by Putting Clap Emojis After Every Word')).toBe('Stop👏Emphasizing👏Your👏Point👏by👏Putting👏Clap👏Emojis👏After👏Every👏Word')
    })
  })


}


)


