// H.W:
// 1 => 5 4 3 2 1
// 2 => 5 4 3 2
// 3 => 5 4 3
// 2 => 5 4
// 1 => 5

// for (let i = 0; i <=5 ; i++) {
//     str = " "
//     for (let j = 5; j <= i; j++) {
//         str= str+j
//     }
//     console.log(i+"=>"+str)
// }


for (let i = 1; i <= 5; i++) { 
    let str = i + ' => ';
    for (let j = 5; j >= i; j--) {
        str += j + ' ';
    }
    console.log(str)
}