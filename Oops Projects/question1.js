// 1. Question 1: Understanding Class Inheritance
// What will be the output of the above code ?
// Explain how class inheritance works in JavaScript and how method overriding affects the output. 

// javascriptCopy code:
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();

// Output:
// Buddy barks.

/* Explanation:
--> In the given code two classes are defined : 1.Animal and 2.Dog.
--> 1.The Animal class has a constructor that takes a name parameter and initializes it,
    --> as well as a speak method that logs a noise based on the name.

--> 2.The Dog class extends the Animal class, which means it inherits the properties and methods of the Animal class.
--> When the code is executed, 
    --> it creates a new instance of the Dog class with the name 'Buddy'. Then, the speak method is called.

--> This output(Buddy barks.) is due to method overriding in JavaScript.
--> When a subclass(Dog) defines a method with the same name as a method in its superclass(Animal),
    --> the subclass's method overrides the superclass's method.
    --> So, when dog.speak() is called, it invokes the speak method of the Dog class, which logs "Buddy barks." instead of the speak method of the Animal class.*/