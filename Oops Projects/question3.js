// Question 3: Accessing Parent Class Methods
// What will be the output of the above code?
// Explain how the super keyword is used to access methods of the parent class within the child class.

// javascriptCopy code
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());

// Output:
// Make: Toyota, Model: Camry, Year: 2020

/* Explanation: 
--> In this code, we have two classes: Vehicle and Car.

--> 1.The Vehicle class has a constructor that takes make and model parameters and initializes them, as well as a getInfo method that returns a string        
containing the make and model.

--> 2.The Car class extends the Vehicle class, inheriting its properties and methods. 
    --> Its constructor also takes a year parameter, and it calls the superclass's constructor using super(make, model) to initialize the make and model properties.
    --> The Car class also overrides the getInfo method to include the year information along with the make and model information.
    --> Within the overridden getInfo method, the super keyword is used to call the getInfo method of the superclass (Vehicle), and then the year information is added to the returned string.

--> When myCar.getInfo() is called, it invokes the getInfo method of the Car class, which in turn calls the getInfo method of the Vehicle class using super.getInfo(). 
    --> This allows the Car class to access and extend the functionality of the getInfo method defined in the Vehicle class, resulting in the output string "Make: Toyota, Model: Camry, Year: 2020".

--> So, the super keyword is used to access methods of the parent class within the child class, enabling the child class to utilize and extend the functionality of the parent class methods.*/