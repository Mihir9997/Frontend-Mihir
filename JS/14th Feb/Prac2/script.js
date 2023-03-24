// "Kunal" 2000 40 // 23 
// "Ranveer" 1996 50
// "Piyush" 2002 60
// "Gaurav" 2005 55
// Hey "name" you still are left with "x" years until retirement.
// [17, 23, 39, 37]
const currentYear = 2023;
const result = [4]
const Person1 = {
    firstName: "Kunal",
    birthYear: 2000,
    retirementAge: 40,
}

const Person2 = {
    firstName: "Ranveer",
    birthYear: 1996,
    retirementAge: 50
}

const Person3 = {
    firstName: "Piyush",
    birthYear: 2002,
    retirementAge: 60
}

const Person4 = {
    firstName: "Gaurav",
    birthYear: 2005,
    retirementAge: 55
}

const calcAge = function (birthYear) {
    const currentAge = currentYear - birthYear
    return currentAge;
}

const calcRetirementYear = function (retirementAge) {
    const retirementYear = retirementAge - calcAge(Person1.birthYear)
    return retirementYear;
}
console.log(`Hey ${Person1.firstName} you still are left with ${calcRetirementYear(Person1.retirementAge)} untill retirement.`)
console.log(`Hey ${Person2.firstName} you still are left with ${calcRetirementYear(Person2.retirementAge)} untill retirement.`)
console.log(`Hey ${Person3.firstName} you still are left with ${calcRetirementYear(Person3.retirementAge)} untill retirement.`)
console.log(`Hey ${Person4.firstName} you still are left with ${calcRetirementYear(Person4.retirementAge)} untill retirement.`)

// for (let i = 1; i <= result.length; i++) {
//     result[i] = (Person[i]).retirementAge
// }
