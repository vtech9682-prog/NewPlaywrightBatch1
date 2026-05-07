import { Person } from "./basicClass.js";

//Inheritence-
//Inheritence is the process of aquiring all methods and variables of parent class 

class Pet extends Person{

    constructor(firstName, lastName, age){

        super(firstName, lastName, age)
    }

    //Method Overriding- Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already provided by its parent class. The implementation in the subclass overrides the implementation in the parent class.
    get location(){

        return 'Mumbai'
    }

}

let pet = new Pet('Tom', 'Cat', 2)
console.log(pet.fullname())
console.log(pet.age)
console.log(pet.location)