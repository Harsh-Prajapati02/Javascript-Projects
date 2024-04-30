// Question 2: Multiple Levels of Inheritance
// What will be the output of the above code?
// Explain how multiple levels of inheritance work in JavaScript classes.

// javascriptCopy code:
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());

// Output:
// blue

/* Explanation:
--> In this code, we have three classes: Shape, Circle, and ColoredCircle.

--> 1.The Shape class has a constructor that takes a color parameter and initializes it, as well as a getColor method to retrieve the color.

--> 2.The Circle class extends the Shape class, inheriting its properties and methods.
    --> It has its own constructor that takes both color and radius parameters, and
    --> it calls the superclass's constructor using super(color) to initialize the color property.

--> 3.The ColoredCircle class extends the Circle class, inheriting properties and methods from both Circle and Shape. 
   --> Its constructor also takes color and radius parameters, and it calls the superclass's constructor using super(color, radius).

--> When coloredCircle.getColor() is called, it invokes the getColor method inherited from the Shape class, retrieving and returning the color property, which is 'blue'.*/