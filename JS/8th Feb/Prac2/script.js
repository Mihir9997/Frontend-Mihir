// Take 4 inputs (guaranteed numbers).
//  Print numbers in the range of first 2 numbers. But skip the numbers that are in the last 2 numbers range.
// 10 40 20 30
// o/p: 10 11 12 13 14 15 16 17 18 19 31 32 33 34 35 36 37 38 39 40

const userNum1 = Number(prompt('Enter the first number'));
const userNum2 = Number(prompt('Enter the second number'));
const userNum3 = Number(prompt('Enter the third number'));
const userNum4 = Number(prompt('Enter the fourth number'));

for (let i = userNum1; i <= userNum2; i++) {
    if (i >= userNum3 && i <= userNum4) {
        continue;
    }
    // if (i < num3 || i > num4) {
        console.log(i);
        // }
}



