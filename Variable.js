//print statement in JavaScript
console.log('Welcome to playwright batch')

// What Is Java Script?
// JavaScript is a programming language that is commonly used to create interactive effects within web browsers. It allows developers to add dynamic content, control multimedia, animate images, and much more on websites. JavaScript is an essential part of web development and is supported by all modern web browsers. It can be used for both client-side and server-side development, making it a versatile language for building web applications.

// Variables in JavaScript
// What Is Variable in JavaScript?
// A variable in JavaScript is a container that holds a value. It is used to store and manipulate 
// data in a program. Variables can hold different types of data, such as numbers, strings, booleans, 
// objects, and more. They are essential for performing operations and managing data in JavaScript applications.

//Rules to declare variable in JavaScript
//1. Variable name must start with a letter, underscore (_), or dollar sign ($).
//2. Variable name can contain letters, digits, underscores, and dollar signs.
//3. Variable name cannot start with a digit.
//4. Variable name cannot be a reserved keyword in JavaScript (e.g., var, let, const, if, else, etc.).
//5. Variable names are case-sensitive (e.g., myVariable and myvariable are different variables).

//Keywords in JavaScript
//1. var: Used to declare a variable with function scope. It can be re-assigned and re-declared within its scope.
//2. let: Used to declare a variable with block scope. It can be re-assigned but cannot be re-declared within its scope.
//3. const: Used to declare a constant variable with block scope. It cannot be re-assigned or re-declared within its scope.

// JavaScript ES5 engine var keyword was used to declare variables, but it had some limitations, such as function scope and hoisting. With the introduction of ES6 (ECMAScript 2015), let and const keywords were introduced to provide better variable scoping and immutability.
// let and const ES6 and ES7 ES8

// var can redclared and reassigned
var name = "John";
var name = "rom"; // Redeclaration is allowed

name = "Smith"; // Reassignment is allowed
console.log(name); // Output: Smith

//let cannot be redeclared but can be reassigned
let age = 30;
//console.log(age);

age = 50; // Reassignment is allowed
console.log(age); // Output: 50

//const cannot be redeclared or reassigned
const PI = 3.14;  //it is final value cannot be changed
console.log(PI);

const userName = 'alice@mailinator.com'
const password = 'alice123'

const fullName = 'sadashiv siddheshwar';

console.log(userName); // Output: alice@mailinator.com
console.log(password); // Output: alice123


//var can be redeclared and reassigned
//let cannot be redeclared but can be reassigned
//const cannot be redeclared or reassigned

 address = "123 Main Street";
 ADDRESS = "456 Elm Street";

//JavaScript is case-sensitive, so address and ADDRESS are treated as two different variables. 
// The variable address holds the value "123 Main Street", while the variable ADDRESS holds the value "456 Elm Street".
console.log(address); // Output: 123 Main Street
console.log(ADDRESS); // Output: 456 Elm Street

