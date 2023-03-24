// Take two user inputs (numbers).
// IMP: It's guaranteed by the user that both the inputs are of type number, and none of them will be 0.
// Task-1:
// Print "Both are positive" if both the inputs are positive numbers. If not, print "One of them is negative" or "Both are negative" accordingly.

let num1 = prompt("Enter Num 1");
let num2 = prompt("Enter Num 2");
num1=Number(num1)
num2=Number(num2)

if (num1 > 0) {
    if (num2 < 0) {
        console.log("One of them is negative")
    }
    else ("Both are positive")
}
else {
    if (num1 < 0) {
        if (num2 > 0) {
            console.log("One of them is positive")
        }
        else("Both are negative")
    }
}


