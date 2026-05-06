
/*
DataTypes in JavaScript

Kind of value which variable is storing is called data type. 
It is used to specify the type of data that a variable can hold. 
JavaScript has several built-in data types, including:



There are 2 types of data types in JavaScript:
1. Primitive Data--

Imutable fixed size data types that hold a single value. They include:

primitive fixed --

let name = "John";  memory location 1000
 name = 'ram';      memory location 1001

There are 7 primitive data types in JavaScript:
 ( string, number, boolean, null, undefined, bigint, symbol)

1. String: Represents a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). Example: "Hello", 'World', `JavaScript`.

 let name = "John";

2. Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14, -10.

`let age = 30;
 let score = 85.5;

3. Boolean: Represents a logical value that can be either true or false. Example: true, false.

let isStudent = true;

4. Null: Represents the intentional absence of any object value. It is a primitive value that represents "no value" or "empty". Example: null.

5. Undefined: Represents a variable that has been declared but has not been assigned a value. It is a primitive value that indicates the absence of a value. Example: undefined.

6. BigInt: Represents integers with arbitrary precision. It is used to store large integers that cannot be represented by the Number type. Example: 9007199254740991n.

7. Symbol: Represents a unique identifier. It is used to create unique property keys for objects. Example: Symbol('mySymbol').

2. Non-Primitive Data-- 
Mutable data types that can hold multiple values. They include:
- Objects
- Arrays
- Functions

1. Objects: Represents a collection of key-value pairs. 
It is a complex data type that can hold multiple values and functions. 

let obj1 = { name: "John", age: 30 };  //object declared
console.log(obj1); // Output: { name: "John", age: 30 }

let obj2 = obj1; // obj2 references the same object as obj1
console.log(obj2); // Output: { name: "John", age: 30 }

obj2.name = "Alice"; // Modifying obj2 also modifies obj1 since they reference the same object
console.log(obj1); // Output: { name: "Alice", age: 30 }
console.log(obj2); // Output: { name: "Alice", age: 30 }

Arrays-
Arrays are a special type of object that can hold multiple values in an ordered list. 
Example: [1, 2, 3], ["apple", "banana", "cherry"].

let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: ["apple", "banana", "cherry"]

let marks = [23, 25, 34, 56, 98, 65];
console.log(marks); // Output: [23, 25, 34, 56, 98, 65]

Functions-
Functions are a special type of object that can be called to perform a specific task. 
They can take parameters and return a value. Example: function add(a, b) { return a + b; }.

function add() {
    console.log("This is a function");
}

*/

let name = "John";
console.log(typeof name); // Output: string

let age = 30;
console.log(typeof age); // Output: number

let isStudent = true;
console.log(typeof isStudent); // Output: boolean

let searchTextbox = null; 
console.log(typeof searchTextbox); // Output: object (this is a known quirk in JavaScript, null is considered an object type)
console.log(searchTextbox); // Output: null

let searchvalue1 = 'Laptop';
console.log(typeof searchvalue1); // Output: string

let data;
console.log(typeof data); // Output: undefined

let bigIntValue = 9007199254740991n;
console.log(typeof bigIntValue); // Output: bigint

let x = Symbol('mySymbol');
console.log(typeof x); // Output: symbol

let obj1 = { name: "John", age: 30 };  // object is declare
console.log(typeof obj1); // Output: object
console.log(obj1); // Output: { name: "John", age: 30 }

let obj2 = obj1; // obj2 references the same object as obj1
console.log(obj2); // Output: { name: "John", age: 30 }

obj2.name = "Alice"; // Modifying obj2 also modifies obj1 since they reference the same object
console.log(obj1); // Output: { name: "Alice", age: 30 }
console.log(obj2); // Output: { name: "Alice", age: 30 }


let student1 = 'Ramesh'; //original value
let student2 = student1;  //copy of student1 value is assigned to student2
console.log(student1); // Output: Ramesh
console.log(student2); // Output: Ramesh

student2 = 'Suresh'; // Modifying student2 does not affect student1 since they are primitive values
console.log(student1);

function add() {
    console.log("This is a function");
}

return add(); // Output: This is a function


