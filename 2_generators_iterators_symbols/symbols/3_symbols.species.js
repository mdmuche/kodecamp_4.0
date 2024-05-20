//? example without symbol.species
class MyArray extends Array {
  // your class here
}

const myArray = new MyArray(1, 2, 3);
console.log(myArray instanceof MyArray); // true
console.log(myArray instanceof Array); // true

//? example using symbol.species
class MyArray2 extends Array {
  static get [Symbol.species]() {
    return Array;
  }

  // your class here
}

const myArray2 = new MyArray2(1, 2, 3);
const mappedArray = myArray2.map((x) => x * 2);
console.log(mappedArray instanceof MyArray2); // false
console.log(mappedArray instanceof Array); // true
console.log(mappedArray); // => [ 2, 4, 6 ]
