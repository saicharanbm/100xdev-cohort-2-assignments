/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const len= str.length;
  for (let i = 0; i <len/2; i++) {
    if(str.charAt(i)===str.charAt(len-(i+1))) continue;
    
    return false;
  }
  return true;
}

module.exports = isPalindrome;
