import { capitalize, clapback, sarcastic } from './textTransform'

describe('textTransform', ()=>{

  describe('capitalize', () => {
    test('Text output is capitalized', () => {
      expect(capitalize('word')).toBe('WORD')
    })
  })

  describe('sarcastic', () => {
    test('Each letter is output in predictable alternating case when random is false', () => {
      expect(sarcastic('word', false)).toBe('WoRd')
    })
  })

  describe('clapback', () => {
    test('Each word is separated by a clap emoji', () => {
      expect(clapback('Stop Emphasizing Your Point by Putting Clap Emojis After Every Word')).toBe('Stop👏Emphasizing👏Your👏Point👏by👏Putting👏Clap👏Emojis👏After👏Every👏Word')
    })
  })


}


)


