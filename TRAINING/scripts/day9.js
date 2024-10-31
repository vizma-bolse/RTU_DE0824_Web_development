//write as many comments as you can explaining your reasoning

// some examples of Javascript commands:
// console.log("Hello from Javascript!");
// console.log(2+2);
// document.body.style.backgroundColor = "lightpink";

//math in console:
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
//reminder of division:
console.log(20%6);
//using paranthesis:
console.log(2 + 3 * 5);
console.log((2 + 3) * 5);
//power operator:
console.log(2**3);
console.log(2**0.5);

//variables are CASE SENSITIVE, stick to camelCase
//variables:
let x = 2; //recommended way to declare variables is let
let y = 3;
let z = x + y;
console.log("x + y = ", z);

let myName = "Vizma";
let university = "RTU";
let sentence = "My name is " + myName + " and I study at " + university + ".";
console.log(sentence);

//adding sentence to div with id "my-text"
document.getElementById("my-text").innerHTML = sentence;

//changing the values of variables
x = 5; // not let anymore
y = 8;
z = x + y;
console.log("x + y = ", z);

//const = this variable will not be changed, it's constant
//it is recommended to always start with const, it leads to less bugs
const myBirthday = "1994-08-17";