"use strict";
// Parent class or Super class
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    _age;
    _email;
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0 || value > 100) {
            throw new Error("Age is not valid!");
        }
        this._age = value;
    }
}
// Child class
class Student extends User {
    _fee;
    constructor(name, age, email, fee) {
        super(name, age, email);
        this._fee = fee;
    }
    get email() {
        return this._email;
    }
}
const student = new Student("Rafi", 16, "rafi@gmail.com", 2000);
console.log(student.age);
// const user = new User("Abul", 27, "abul@kabul.com")
// user.age = 30
// console.log(user.age)
//# sourceMappingURL=inheritance.js.map