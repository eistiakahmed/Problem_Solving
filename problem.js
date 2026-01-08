const reverseString = (str) => {
  let newStr = ''

  for(let i = str.length - 1; i>= 0; i--){
    newStr += str[i]
  }
  return newStr
}

// console.log(reverseString('hello'))

const countVowels = (str) => {
  let vowels = ['a', 'e', "i", "o", "u"]
  let count = 0;

  for(let letter of str.toLowerCase()){
    if(vowels.includes(letter)){
      count++;
    }
  }
  return count;
}
console.log(countVowels('Programming'))


