// Task Using Functions : Given 2 arrays. Take number as user input and remove that element from the first array.
//  Log the updated array. Now for confirmation, user will provide a number from the updated array.
//   We've to alert the index of this input number. The same process should be repeated for the second array.
const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arr2 = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

const userInput1 = +prompt("Enter a Number")
const arr3 = [];

function removeNumber(paramA, paramB) {
    for (let i = 0; i < paramA.length; i++) {
        if (userInput1 == paramA[i]) {
            continue
        }
        arr3.push(paramA[i]);
        



    }
}
removeNumber(arr1);

