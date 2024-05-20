//?Definition and explanation
const symbol1 = Symbol();
const symbol2 = Symbol();
const symbol3 = Symbol("some description");

console.log(symbol1 === symbol2); // output => false creates a unique symbol
console.log(symbol1 === symbol3); // output => false creates a unique symbol

//? using symbols as property keys
const person = {};
const secretPropSymbol = Symbol("secret");
person[secretPropSymbol] = "secret value";

console.log(person.secretPropSymbol);
console.log(person[secretPropSymbol]);

//? symbol registry
const symbol4 = Symbol.for("sharedSymbol");
const symbol5 = Symbol.for("sharedSymbol");
console.log(symbol4 === symbol5); // => output true
