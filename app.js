// BMI calculation for the current state
// variables

let weight = Number(prompt("Enter your weight in kg"));
let height = Number(prompt("Enter your height in cm"));
let result = weight/(height*2); // calculate the BMI

//condition

if (result<18.5) {
    console.log("you're in the underweight range" + result);
} else if (result>=18.5 && result<=24.9) {
    console.log("you're in the healthy range" + result);
} else if (result>=25 && result<=29.9) {
    console.log("you're in the overweight range"+ result);
} else if (result >=30) {
    console.log("you're in the obese range" + result);
}
