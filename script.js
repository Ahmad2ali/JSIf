
var age = 27;
if (age > 18) {
  console.log("You Are Adult");
}

let score = 45;
if (score <= 50) {
  console.log("You failed the test");
}

let name = "John";
if (name === "John") {
  console.log("Hello,John");
}
let day = "Monday";
if (day !== "Saturday" && day !== "Sunday") {
  console.log("It's a weekday");
}
let num = 4;
if (num % 2 == 0) {
  console.log("The number is even");
}
let char = "a";
if (char.length === 1 && char.match(/[a-z]/i)) {
  console.log("It's a letter");
}
/==========================================/
let list = [1, 2, 3];
if (Array.isArray(list)) {
  console.log("It's an array");
} else {
  console.log("It's not an array");
}
/==========================================/
let x = 5;
if (x > 0) {
  console.log("x is a positive number");
}
/==========================================/
let y = 5;
if (y < 0) {
  console.log("x is a negative number");
}
/==========================================/
let z = 9;
if (z % 3 == 0) {
  console.log("z is a multiple of" + "" + "3");
}
/==========================================/
let gpa = 3.5;
if (gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
}
/==========================================/
let password = "mypassword123";
if (password.length >= 8) {
  console.log("Your password is strong");
}
/==========================================/
var age1 = 24;
if (age1 >= 18 && age1 <= 65) {
  console.log("You are of working age");
}
/==========================================/

let color = "red";

if (color === "red" ||  color === "blue" || color === "green") {
  console.log("color is a primary color");
}

function isValidNumber(input) {
    if (typeof input === "number" && !isNaN(input)) {
      return `${input} is a valid number`;
    } 
    else if (typeof input === "string" && !isNaN(Number(input))) {
      return `${input}  is a valid number`;
    } 
    else {
      return `${input} is not a number`;
    }
  }
  console.log(isValidNumber(11));
