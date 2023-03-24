let firstName = prompt("Enter Your Name");
let CAge = prompt('Enter Your  Current Age');
let FYear= prompt('Enter Future Year');
const Cyear = 2023;
let BYear= Cyear-CAge;
let GenZ = BYear>1997;
const FAge = (2050-2023 + Number(CAge));


console.log(Cyear-CAge);
console.log(2050-2023 + Number(CAge));
console.log(GenZ);

alert(`${firstName} , your age in ${FYear} will be ${FAge} and your birth year is ${BYear}`)

