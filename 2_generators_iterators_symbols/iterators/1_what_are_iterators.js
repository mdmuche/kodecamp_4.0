const numbers = [1, 2, 3, 4, 5];
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value, iterator.next().done);

for (const num of numbers) {
  //   console.log(num);
}
