"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    _name;
    constructor(name) {
        this._name = name;
    }
    makeSound() {
        console.log("Animal can make sound");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meowwwwwwww");
    }
}
// const cat = new Cat("Billu")
// cat.makeSound()
class Dog extends Animal {
    makeSound() {
        console.log("Whoof whoof!");
    }
}
// const dog = new Dog("Dog")
// dog.makeSound()
//// Example 2:
class Shape {
    describe() {
        console.log("This is a shape");
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return 3.1416 * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    height;
    width;
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}
const circle = new Circle(5);
// console.log(circle.area())
const reactangle = new Rectangle(4, 5);
console.log(reactangle.area());
// Math.floor()
// Math.ceil()
// Math.random()
// const d = new Date() 
// console.log(d)
//# sourceMappingURL=polymorphism.js.map