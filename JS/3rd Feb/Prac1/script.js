// Take first-name as input. This person plans to start investments the next year (starting from January).
// Also, take monthly-investment and future-year as inputs. Calculate the "total invested amount" this person will have in that future-year.
// Input example: First name: "Piyush"; Monthly investment: 10; Future year: 2035.
// Alert: Hey Piyush, your total investment by the end of 2040 will be ₹1440.
// The person is supposed to get an additional 15% return, on top of the total invested amount. Calculate and log the total return.
// Output (for the same input): ₹1,656.
// *Typo. Alert: Hey Piyush, your total investment by the end of 2035 will be ₹1440.

const firstName = prompt("Enter Your Name");
const Yinvested = prompt("Amount you want to invest");
const rYear = prompt("returns Year");
const cYear = 2024;
const tYear = (rYear-cYear);
const tMonths = (tYear*12);
const tinvest = (Yinvested*tMonths);
console.log(tinvest)
alert(tinvest)






