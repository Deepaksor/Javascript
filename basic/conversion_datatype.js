// Datatype conversion in JavaScript
// JavaScript provides several methods to convert data types. Here are some common conversions:

// 1. String to Number
var strNum = "123";
var numFromString = Number(strNum); // Using Number() function
console.log("String to Number: " + numFromString + ", Type: " + typeof numFromString);

// 2. Number to String
var num = 456;
var strFromNumber = String(num); // Using String() function
console.log("Number to String: " + strFromNumber + ", Type: " + typeof strFromNumber);

// 3. Boolean to String
var boolValue = true;
var strFromBoolean = String(boolValue);
console.log("Boolean to String: " + strFromBoolean + ", Type: " + typeof strFromBoolean);

// 4. String to Boolean
var strBool = "true";
var boolFromString = (strBool === "true"); // Simple comparison for conversion
console.log("String to Boolean: " + boolFromString + ", Type: " + typeof boolFromString);

// 5. Number to Boolean
var numValue = 0;
var boolFromNumber = Boolean(numValue); // 0 is false, any other number is true
console.log("Number to Boolean: " + boolFromNumber + ", Type: " + typeof boolFromNumber);

// 6. Boolean to Number
var boolVal = false;
var numFromBoolean = Number(boolVal); // false is 0, true is 1
console.log("Boolean to Number: " + numFromBoolean + ", Type: " + typeof numFromBoolean);

// Note: JavaScript also performs implicit type conversion (type coercion) in certain situations, 
// but it's generally recommended to use explicit conversion methods for clarity and to avoid unexpected results.

//conversion to integer
// "39"=> string
// 39=> number
// "545fh"=> NaN

// conversion to boolean 
// ""=> false
// "432"=> true
//  1=> true