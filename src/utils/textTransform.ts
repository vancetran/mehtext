import { getRandomInt } from "./RNG"

export function capitalize(input: string): string {
  const output = input.toUpperCase()
  return output
}

export function sarcastic(input: string, random: boolean = true): string {
  const result = input.split('').map((el: string, index: number): string => {
    if(random){
      return getRandomInt(2) ? el.toUpperCase() : el
    }
    return index % 2 === 0 ? el.toUpperCase() : el
  }).join('')
  return result
}

// https://www.vice.com/en/article/jpyajg/the-clap-and-the-clap-back-how-twitter-erased-black-culture-from-an-emoji
export function clapback(input: string): string {
  const arr = input.split(' ')
  const arrResult = arr.map( (el: string, index: number): string => {
    if(index !== 0){
      return `👏${el}`
    } else {
      return el
    }
  })
  return arrResult.join('')
}

export function ssssnake(input: string): string {
  const arr = input.split(' ')
  const arrResult = arr.map( (el: string): string => {
    const lastIndex = el.length - 1
    if(el.charAt(0) === 's' || el.charAt(0) === 'S' ){
      if(el.charAt(0)==='s')
        return `sss${el}`
      return `SSS${el}`
    }
    if(el.charAt(lastIndex) === 's' || el.charAt(lastIndex) === 'S') {
      if(el.charAt(lastIndex)==='s')
        return `${el}sss`
      return `${el}SSS`
    }
      return el
  })
  return arrResult.join(' ')
}