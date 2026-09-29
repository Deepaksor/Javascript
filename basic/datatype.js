//Datatype in javascript 
/*About datatype in javascript
1. Number: Represents numeric values, including integers and floating-point numbers.
2. String: Represents sequences of characters enclosed in single or double quotes.
3. Boolean: Represents a logical entity that can have two values: true or false.
4. Object: Represents a collection of key-value pairs, where each key is a string and the value can be any data type.
5. Array: Represents an ordered list of values, which can be of any data type.
6. Null: Represents the intentional absence of any object value.
7. Undefined: Represents a variable that has been declared but has not yet been assigned a value.
8. Symbol: Represents a unique and immutable primitive value, often used as an identifier for object properties.
*/

// example of using different data types in JavaScript
var num = 10; // Number
var str = "Hello, World!"; // String
var bool = true; // Boolean
var obj = { name: "John", age: 30 }; // Object
var arr = [1, 2, 3, 4, 5]; // Array
var n = null; // Null
var u; // Undefined
var sym = Symbol("unique"); // Symbol

// Displaying the values and their types
console.log("Number: " + num + ", Type: " + typeof num);
console.log("String: " + str + ", Type: " + typeof str);
console.log("Boolean: " + bool + ", Type: " + typeof bool);
console.log("Object: " + JSON.stringify(obj) + ", Type: " + typeof obj);
console.log("Array: " + arr + ", Type: " + typeof arr);
console.log("Null: " + n + ", Type: " + typeof n);
console.log("Undefined: " + u + ", Type: " + typeof u);
console.log("Symbol: " + sym.toString() + ", Type: " + typeof sym);