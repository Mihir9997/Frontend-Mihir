// Task: Take user's age as input. Create a variable and log true if the person's age is greater than or equal to 18. False otherwise.
// If the person's age is greater than or equal to 18, log: "Your're eligible for taking license". If not, then log the number of years left for the person to become eligible for a license
const userAge = prompt('Enter Your Age');
const result = userAge>=18
const Yremaning = 18-userAge
console.log(result)
if(userAge>=18){
    alert("Your're eligible for taking license")
}
else{
   alert(`${Yremaning} year's left for eligblity`)
    }

    


