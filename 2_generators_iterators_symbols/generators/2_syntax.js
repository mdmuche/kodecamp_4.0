function* numberGenerator() {
  yield 1; // pauses execution and returns 1
  console.log("after the first yield"); // this line executes after the first yield
  yield 2; // pauses execution and returns 2
}

const generator = numberGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
