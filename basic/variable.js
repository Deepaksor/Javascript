//variables are the containers for storing data values. In JavaScript, we use the var, let, and const keywords to declare variables.
var name = "John";
// var is function-scoped and can be redeclared and updated
let age = 30;
// let is block-scoped and can be updated but not redeclared
const country = "USA";
// const is block-scoped and cannot be updated or redeclared

// Example of using variables
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Country: " + country);

// Updating variables
age = 31; // valid, since age is declared with let
console.log("Updated Age: " + age);

// Attempting to update a const variable will result in an error
// country = "Canada"; // Uncommenting this line will throw an error
