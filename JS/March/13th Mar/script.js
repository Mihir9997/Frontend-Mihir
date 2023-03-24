'use strict'

let str = 'raNdoM somEoNe PiyUSH RAJU SAtiSH'

let str1 = str.toLowerCase();
// console.log(str1)

let str2 = str1.split(' ');
const array =[]


for (let i = 0; i < str2.length; i++) {
    const name= str2[i];
    array.push(`${name[0].toUpperCase()}${name.slice(1)}`);
}
let a = array.join(' ');
console.log(a);