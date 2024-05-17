function* naturalNumbers() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const numbers = naturalNumbers();
for (const num of numbers) {
  if (num > 10) break;
  console.log(num);
}

// let result = numbers.next();
// while (!result.done) {
//   console.log(result.value);
//   result = numbers.next();
// }
