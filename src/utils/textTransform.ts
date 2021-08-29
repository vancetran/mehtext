import { getRandomInt } from "./RNG"

export function capitalize(input: string): string {
  const output = input.toUpperCase()
  return output
}

// TODO: Could be optimized
export function sarcastic(input: string, random: boolean = true): string {
  let output = ''
  const arr = input.split('')
  const arrResult = arr.map((el: string, index: number) => {
    if(random){
      debugger
      return getRandomInt(2) ? el.toUpperCase() : el
    }
    return index % 2 === 0 ? el.toUpperCase() : el
  })
  output = arrResult.join('')
  return output
}
