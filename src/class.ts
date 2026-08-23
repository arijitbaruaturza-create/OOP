/**
 * name
 * email
 * age 
 * marks
 */

class Student {
    name: string
    id: number
    age: number
    email: string

    //constructor ---> A special block of code or method used to initialize an object when it is created.
    constructor(name: string, id: number, age: number, email: string){
        this.name = name
        this.id = id
        this.age = age
        this.email = email
    }
}


//Instantiate
//Instance
const rafi = new Student("Rafi", 22201844, 16, "rafi@gmail.com")
const sadia = new Student("Sadia", 22201843, 17, "sadia@gmail.com")

console.log(rafi)
console.log(sadia)