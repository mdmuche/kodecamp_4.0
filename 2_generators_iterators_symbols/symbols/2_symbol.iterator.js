const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
