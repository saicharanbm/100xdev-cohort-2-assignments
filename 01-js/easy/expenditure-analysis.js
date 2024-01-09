/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
const output=[];
for (const transaction of transactions) {
  const{category,price}=transaction;
  let found =0;
  for (const result of output) {
    if(category===result.category){
      result.totalSpent+=price;
      found=1;
      break;
    }
  }
  if(!found){
    output.push({category,"totalSpent":price});
  }
  
}

return output;




  // const categoryMap = new Map();
  // for (const transaction of transactions) {
  //   const { category, price } = transaction;

  //   if (categoryMap.has(category)) {
  //     categoryMap.set(category, categoryMap.get(category) + price);
  //   } else {
  //     categoryMap.set(category, price);
  //   }
  // }

  // const result = Array.from(categoryMap, ([category, totalSpent]) => ({
  //   category,
  //   totalSpent,
  // }));

  // return result;

}

module.exports = calculateTotalSpentByCategory;
