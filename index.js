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

// const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str) {
  let count = 0;

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels('programming'));

// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// console.log(isPalindrome('hello'));

// Problem 4: Find the Maximum Number

const maxNum = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

// console.log(maxNum([5, 1, 9, 3]));

// Problem 5: Remove Duplicates from an Array

const removeArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// console.log(removeArr([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array

const total = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return sum;
};
// console.log(total([1, 2, 3]));

// Problem 7: Find Even Numbers in an Array
const isEven = (arr) => {
  const num = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      num.push(arr[i]);
    }
  }
  return num;
};

// console.log(isEven([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word
const capitalizeWords = (str) => {
  const result = [];
  const words = str.split(' ');

  for (let word of words) {
    if (word) {
      const capital = word[0].toUpperCase() + word.slice(1);
      result.push(capital);
    }
  }
  return result.join(' ');
};

// const result = capitalizeWords('hello world');
// console.log(result);

// Problem 9: Find the Factorial of a Number
const sum = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

// const result = sum(5);
// console.log(result);
