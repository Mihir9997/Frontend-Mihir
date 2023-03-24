// // Task: Given 2 arrays. Take number as user input and remove that element from the first array.
//  Log the updated array. Now for confirmation, user will provide a number from the updated array.
//   We've to alert the index of this input number. The same process should be repeated for the second array.
const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arr2 = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

const userInput1 = +prompt("Enter a Number")
const arr3 = [];
// //  const i = arr1.concat(arr3) 
// console.log(i)
for (let i = 0; i < arr1.length; i++) {
    if (userInput1 == arr1[i]) {
        continue
    }
    arr3.push(arr1[i]);
}
console.log(arr3)
const userInput2 = +prompt("Confirm the Number");
alert(arr3.indexOf(userInput2));
//Second Array
const userInput3 = +prompt("Enter a Number")
const arr4 = [];
for (let i = 0; i < arr1.length; i++) {
    if (userInput3 == arr2[i]) {
        continue
    }
    arr4.push(arr2[i]);
}
console.log(arr4)
const userInput4 = +prompt("Confirm the Number");
alert(arr4.indexOf(userInput4));






