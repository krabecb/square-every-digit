function squareDigits(num){
  let result = ''
  let arr = num.toString().split('').map(number => parseInt(number))
  arr.forEach(number => result += Math.pow(number, 2))
  return Number(result)
}
