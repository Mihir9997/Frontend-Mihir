// Take 1 user input (number). Print the table of that numbers in this format: 
// 2 * 2 => 4
const userNum = Number(prompt('Enter a Number'));
for (let i = 1; i <= 10; i++) {
    console.log(`${userNum}*${i} => ${userNum * i}`)
}
