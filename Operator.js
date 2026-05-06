
/*
What learn Operators in JavaScript?

let a = 10;
let b = "10";

let sum = a + b; // Addition
let difference = a - b;

Types of Operators in JavaScript
1. Arithmetic Operators: Used for performing mathematical operations. Example: +, -, *, /, %.
2. Assignment Operators: Used for assigning values to variables. Example: =, +=, -=, *=, /=.
3. Comparison Operators: Used for comparing values. Example: ==, ===, !=, !==, >, <, >=, <=.
4. Logical Operators: Used for combining multiple conditions. Example: && (AND), || (OR), ! (NOT).
5. String Operators: Used for concatenating strings. Example: +.

Aritmetic Operators-

let addition = a + b; // Addition
console.log(addition); // Output: 15

//Assignement Operators-
total = 10 + 5; // Addition
console.log(total); // Output: 15

let x = 10;
console.log(x); // Output: 10

x = x + 5; // Equivalent to x += 5

x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 15

// Comparison Operators-
let isEqual = a == b; // Equal to true if values are equal, false otherwise
console.log(isEqual); // Output: false

let isStrictEqual = a === b; // Strict equal to
console.log(isStrictEqual); // Output: false

let isNotEqual = a != b; // Not equal to
console.log(isNotEqual); // Output: true

let isGreaterThan = a > b; // Greater than
console.log(isGreaterThan); // Output: true

let isLessThan = a < b; // Less than
console.log(isLessThan); // Output: false

let isGreaterThanOrEqual = a >= b; // Greater than or equal to
console.log(isGreaterThanOrEqual); // Output: true

let isLessThanOrEqual = a <= b; // Less than or equal to
console.log(isLessThanOrEqual); // Output: false

*/

let a = 10;
let b = 5;

let addition = a + b; // Addition
console.log(addition); // Output: 15

total = 10 + 5; // Addition
console.log(total); // Output: 15

let subtraction = a - b; // Subtraction
console.log(subtraction); // Output: 5

let multiplication = 40 * 5; // Multiplication
console.log(multiplication); // Output: 200

let division = 100 / 5; // Division
console.log(division); // Output: 20

let modulus = 10 % 3; // Modulus (Remainder) 10-9 =1
console.log(modulus); // Output: 1

let x = 50;
x = x + 5; // Equivalent to x += 5
x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 60

x -= 10; // Equivalent to x = x - 10
console.log(x); // Output: 50

x *= 2; // Equivalent to x = x * 2
console.log(x); // Output: 100

x /= 2; // Equivalent to x = x / 2
console.log(x); // Output: 50

let isEqual = a == b; // Equal to true if values are equal, false otherwise
console.log(isEqual); // Output: false

let isStrictEqual = a === b; // Strict equal to
console.log(isStrictEqual);



let isgreaterThan = a > b; // Greater than
console.log(isgreaterThan); // Output: true

let islessThan = a < b; // Less than
console.log(islessThan); // Output: false

let isGreaterThanOrEqual = 20 >= 20; // Greater than or equal to
console.log(isGreaterThanOrEqual); // Output: true

let isLessThanOrEqual = 21 <= 20; // Less than or equal to
console.log(isLessThanOrEqual); // Output: false

let isNotEqual = a != b; // Not equal to
console.log(isNotEqual); // Output: true

let erp = 50;
let srp = "50";

let isEqualValue = erp === srp; // Output: true (compares values, not types)
console.log(isEqualValue);

//diffrence between == and === and =


/*
Logical Operators-

-It is used for combining multiple conditions together

Symbols - &&(AND) , ||(OR) , !(NOT) 

    T * T = T
    T * F = F
    F * T = F
    F * F = F

    T + T = T
    T + F = T
    F + T = T
    F + F = F

*/

 a = 10;
 b = 20;

 let andOperator= (a>5 && b>15);  ///true  *
 console.log(andOperator); // Output: true

    let orOperator = (a > 15 || b > 30);  //true +
    console.log(orOperator); // Output: true

    let notOperator = !(a > 5);

    console.log(notOperator);

// String Operators-
// String operator is used to concatenate strings together. 
// The + operator is commonly used for string concatenation.

let firstName = "Ramesh";
let lastName = "Kumar";

let userName = firstName + " " + lastName; // Concatenation
console.log(userName); // Output: "Ramesh Kumar"


//-----------------------------------------------------------------------------







 






