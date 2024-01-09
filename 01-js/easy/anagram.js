/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!=str2.length)return false;

  const arr1=str1.toLowerCase().split("");
  const arr2=str2.toLowerCase().split("");
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]===arr2[i]) continue;
    
    // console.log(i)
    let found =1;
    for (let j = i+1; j < arr1.length; j++) {
      if(arr1[i]===arr2[j]){
        found=0;
        let temp = arr2[i];
        arr2[i]= arr2[j];
        arr2[j]= temp;
        break;
      }
      
    }
    if(found)return false;
    
    
  }

  return true;

  
}

module.exports = isAnagram;
// console.log(isAnagram('School MASTER', 'The ClassROOM'));