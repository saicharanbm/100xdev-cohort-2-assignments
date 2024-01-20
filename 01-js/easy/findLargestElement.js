/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let larget= numbers[0];
    for (const value of numbers) {
        if(value>larget)larget=value;
    }

    return larget;
    
}

module.exports = findLargestElement;