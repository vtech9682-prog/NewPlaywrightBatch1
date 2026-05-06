/*
 Arrays ---
 What is array--
 -Array collection of multiple values stored in single variable
 -If we have set of elements then we can store thos elements in one container which is called as array
*/

var marks = new Array(6);

var marks = new Array(20, 40, 50, 55, 70);

console.log(marks);

var marks = [34, 38, 49, 50, 60];

console.log(marks);

marks[0]= 65;

console.log(marks[4]);

console.log(marks.length);

console.log(marks.indexOf(49));

console.log(marks.includes(120))

pcm = marks.slice(2,4);

console.log(pcm);

//How to sum each array element

let sum =0
for(let i =0; i<marks.length; i++){

  sum = sum+ marks[i]
}
console.log(sum);


//-----------------
marks.push(80)        //this method is used to updated the value at last index of array
console.log(marks);

marks.pop();
console.log(marks);   // pop removed last index from array

marks.unshift(31);
console.log(marks);   // It will update new value at the first index in array


// Reduce, Filter, map

let total = marks.reduce((Sum, shark) => Sum+shark , 0)

console.log(total);

console.log(marks)


//Filter--
//Create new array with even numbers of score by using for loop
var scores = [12,11,13,45,17,22,48]   // by using for loop 

var evenscore =[]
for(let i=0; i<scores.length; i++){
  if (score[i]%2 == 0){
     evenscore.push(score[i])
}
}
console.log(evenscore);

//Create new array with even numbers of score by using Filter Method

let newFilterScore= scores.filter(score => score%2==0)

console.log(newFilterScore); // Filter is used to filter the values based on specific condition

//Map
//Map function will modify each and every value of array to new value 
// its used when we want map old value with new value after performing certain operations

// multiple each element of array with 3

let mappedArray = newFilterScore.map(score => score * 3)
console.log(mappedArray);


//String Array

let fruits = ['apple', 'banana', 'orange', 'grape'];

console.log(fruits)

fruits.push("mango")

console.log(fruits)

//How to sort string element from array // ascending

console.log(fruits.sort())              

console.log(fruits.reverse())  // reverse array element 

//--------------------------------































































