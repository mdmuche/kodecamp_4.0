// function sayHi() {
//   if (true) {
//     let message = "Hello from inside the block!";
//   }

//   console.log(message);
// }

// sayHi();

//? temporary dead zone
//? reassignment
// let x = 5;
// console.log(x);
// x = 10;
// console.log(x);

//? mutation
// let person = { name: "alice", age: 30 };
// console.log(person);
// person.age = 35;
// console.log(person);

//? hoisting
// console.log(pig);
// var pig = "animal";

// function sayHi2() {
//   console.log(pig);
// }

// sayHi2();

//?preventing duplicate declarations
//?1. Using let and const for Block Scoping:
// if (true) {
//   let message = "welcome";
// }

// let message = "goodbye";
// console.log(message);

//?2. Utilizing Strict Mode:
//!
// "use strict";
// var message2 = "welcome";
// var message2 = "goodbye";
// console.log(message2);

//? 3. Namespaces and Modules:
const myNameSpace = {};
myNameSpace.message = "hello";
const message = "goodbye";
console.log(myNameSpace.message);
console.log(message);

//? 4. Linters and Static Code Analysis Tools:
