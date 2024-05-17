function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numberGenerator();
console.log(generator.next().value); // output => 1 the generator pauses at the first yield
console.log(generator.next().value); // output => 2 resumes exexcution and yields the next value
console.log(generator.next().value); // output => 2 resumes execution again and yields the last value
console.log(generator.next().value, generator.next().done);
