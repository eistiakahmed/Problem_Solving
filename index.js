// Problem 1: Reverse a String
function reverseString(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// console.log(reverseString("Hello"))

// Problem 2: Count Vowels in a String

const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowel(str) {
  let count = 0;

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;

}

// console.log(countVowel('programming'));

