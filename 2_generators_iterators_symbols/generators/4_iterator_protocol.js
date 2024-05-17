//? the iterator protocol defines a standard way for objects to be interatable
//? it specifies that an iterable object should have symbols.iterator that returns an iterator object. this iterator object then has a method called next() that when called returns an object with two properties (value, and done).

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numberGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
