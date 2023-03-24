// Task 1:  Given a product's price. Calculate its total price after taxation. The tax rate is 10% of the actual product's price.
/* 
1500 => 1500 + 10% 
*/
// Task 2: This time, we're provided with 2 types of goods i.e. foreign and domestic.
//  The product with a price greater than 1000 is a domestic good and less than 1000 is foreign. Just convert the foreign product's price to INR and calculate the total price.
// 500 => 41000 => 41000 + 10%
// 2000 => 2000 + 10%

// Task 3: This time, we're given an array of product prices. We must return two arrays. The first array would contain each element's tax,and 
// the second array would contain each element's total price. The rules of the second task should be followed, when calculating the tax for each element.

// Input: [1000, 1200, 520, 2030, 400]
const productPrice = +prompt("Enter a Price")
const tax = 10 / 100

function taxCalc(productPrice) {
    productPrice = productPrice + tax
    return (productPrice)
}

console.log(taxCalc());