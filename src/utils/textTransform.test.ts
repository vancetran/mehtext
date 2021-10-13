import { clapback, sarcastic, ssssnake } from './textTransform'

describe('textTransform', ()=>{

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

  describe('ssssnake', () => {
    test('Each word beginning with lowercase or uppercase S is prefixed with extra SSS characters', () => {
      expect(ssssnake(`Tunnel snakes rule, We're the tunnel snakes, That's us, And we rule! Rule!`)).toBe(`Tunnel ssssnakes rule, We're the tunnel ssssnakes, That'ssss us, And we rule! Rule!`)
    })
  })
}


)


