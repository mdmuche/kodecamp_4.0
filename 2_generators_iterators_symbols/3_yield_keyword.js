function* numberGenerator() {
  yield 1;
  yield 2 * 1;
  yield 3 + 1;
}

const generator = numberGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
