const firstNumber = 8;
const secondNumber = 100;
const thirdNumber = 50;

if ((thirdNumber > secondNumber && firstNumber < secondNumber) && (thirdNumber < secondNumber || thirdNumber > secondNumber)) {
    console.log(secondNumber)
}
else if ((firstNumber > thirdNumber || firstNumber < thirdNumber) && (secondNumber < thirdNumber || secondNumber > thirdNumber)) {
    console.log(thirdNumber)
}
else if ((thirdNumber > firstNumber || thirdNumber < firstNumber) && (secondNumber < firstNumber || secondNumber > firstNumber)) {
    console.log(firstNumber)
}


