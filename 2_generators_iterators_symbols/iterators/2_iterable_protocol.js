// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(num);
// }

//? creating custom iterables
class NumberRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;

    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const range = new NumberRange(1, 5);
for (const num of range) {
  console.log(num);
}
