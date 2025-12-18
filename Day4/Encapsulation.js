class Person {

    #privateAge
    constructor(name, age) {
        this.name = name;
        this.#privateAge = age;
    }
    get age(){
        return this.#privateAge
    }
    set age(age){
        this.#privateAge = age;
    }

    
}
const person1 = new Person('Sudip', 30);
console.log(person1.age);