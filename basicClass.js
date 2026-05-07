
//Classes and Its properties
//Constructor is a special method that is used to initialize the object properties when we 
// create an object of the class. It is called automatically when we create an object of the class. It is defined using the constructor keyword.

export class Person
{

    constructor(firstName, lastName, age)
    {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    fullname()
    {
        return this.firstName + ' ' + this.lastName
    }
 

    get location(){

        return 'Pune'
    }

     
}

/*
let person = new Person('Shivaji', 'Pande', 25)
console.log(person.age)
console.log(person.location)
console.log(person.fullname())
let person1 = new Person('Ramesh', 'Pande', 30)
console.log(person1.fullname())
console.log(person1.age)

*/
