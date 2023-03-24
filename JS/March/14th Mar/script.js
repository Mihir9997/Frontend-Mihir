'use strict'
const CardNumbers= [2341232, '123212332', 23, '   12332   ', 234123212332324];

for(let i=0; i<CardNumbers.length;i++){
    const str =CardNumbers[i]+'';
   const last4 =str.slice(-4);
   const Mask = last4.padStart(str.length,'*')
console.log(Mask);
}