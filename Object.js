//What is Object
// why do we need that
// Object is collection of properties
//Properties can be define as key and value pair

//let email= 's.pande@mailinator.com'
//await page.locator('#email').fill(email)

let student = {

    firstName: 'shailesh',
    lastName: 'pande',
    age: 18,
    email: 's.pande@mailinator.com',
    isActive: 'true',

    fullName: function()
    {
        return this.firstName + ' ' + this.lastName
    }
    
}

//How to access object and its properties

console.log(student)
console.log(student.lastName)
console.log(student.email)
console.log(student.age)
console.log(student['age'])
console.log(student.fullName())

//how to update property value

student.firstName = 'Ramesh'

console.log(student)

//how to delete properties

delete student.lastName

console.log(student)

//how to check properties present or not in object

console.log('gender' in student)

//how to iterate with all properties in object

for (let x in student)
{

    console.log(student[x])
}




