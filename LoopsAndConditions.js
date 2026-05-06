
/*
If Statement--
if
els if
else

If statement-
one time condition check
suppose condition true then it will execute their block of code

let isDialogOpen = await page.locator("#dialog").isVisible();

if (isDialogOpen) {
    await page.getbyrole("button", { name: "Close" }).click();       
}
*/
let x;
let y = 10;

if (x > y) {
    console.log("x is greater than y");
} 

else if (x < y) {
    console.log("x is less than y");
}

else if (x == y) {
    console.log("x is equal to y");
}

else {
    console.log("x is not a number");
}

/*
loops -
while loop
do while loop
for loop

while loop---
while loop run when condition is true
if condition become false then while loop stopped 
used only when we don't know how many times we want to execute a block of code
also we aware aabout when it will stop


while (true) {
    console.log("This will run indefinitely");
}

do while loop--
whether condition is tru or false  
it will execute its block of code at one time ..
differnece between while and do whhile loop

*/

let fuel = 10;

while (fuel > 0) {
    console.log("The car is running 15km");
    fuel-- ; // Decrease fuel by 1
}


fuel =10;

do{
    console.log("The car is ru 1nning in do loop once");
    fuel--;

}while( fuel > 0 )


/*
For loop---
For loop executed when condition is true 
block code will execute untill condition become false
when we aware about about how many time we have to run the block of code ///

*/


for (let i=1; i<=10; i++){

console.log("link clicked" + i)

}

// sum of first 5 number  1+2+3+4+5 =

let sum =0;

for(let i=1; i<=5; i++){

    sum = sum + i;

}

console.log(sum);


// factorial of 5  1*1, 1*2, 2*3..... 12345

let fact = 1;
for (let i=1; i<=5; i++){
    fact = fact * i;
}
console.log(fact);


































