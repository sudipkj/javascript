// var is global scope
// let is block scope
// const is block scope and constant value

console.log("Hello, World!");
let a = 10;
a = 'Sudip kumar'

console.log("Value of a:", a);
{
    console.log("Inside block scope:", a);
}


// arrow function
const add = (x, y) => {
    return x + y;
}

console.log("Sum:", add(5, 3));

// template literals
const name = "Sudip";
const greeting = `Hello, ${name}! Welcome to the world of JavaScript.`;
console.log(greeting);

// destructuring
const person = {
    firstName: "Sudip",
    lastName: "Kumar",
    age: 25
};

const { firstName, lastName } = person;
console.log(`First Name: ${firstName}, Last Name: ${lastName}`);

// spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log("Combined Array:", arr2);

// default parameters
function multiply(a, b = 2) {
    return a * b;
}

console.log("Multiply:", multiply(5));

export { greeting };

