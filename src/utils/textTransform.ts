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
      return getRandomInt(2) ? el.toUpperCase() : el
    }
    return index % 2 === 0 ? el.toUpperCase() : el
  })
  output = arrResult.join('')
  return output
}

export function clapback(input: string): string {
  const arr = input.split(' ')
  let arrResult = []

  for(let i = 0; i < arr.length; i++){
    if(i !== 0){
      arrResult.push('👏')
    }
    arrResult.push(arr[i])
  }
  return arrResult.join('')
}