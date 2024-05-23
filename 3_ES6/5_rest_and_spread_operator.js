//? rest and spread operator
//? rest parameters
//? 1. rest in array destructuring
const numbers = [1, 2, 3, 4, 5];
const [firstNumber, ...rest] = numbers;
// console.log(firstNumber);
// console.log(rest);

//? 2. rest parameters in function arguments
function sum(a, b, ...rest) {
  let total = a + b;
  for (const num of rest) {
    total += num;
  }

  return total;
}

// console.log(sum(1, 2, 3, 4, 5));

const message = "hello";
const letters = [...message];
// console.log(letters);

function greet(...people) {
  for (const person of people) {
    // console.log("hello, " + person + " thanks for greeting me");
  }
}

greet("jameson", "victor", "boma", "eshiet");

//? combining arrays
//. 1 the spread operator
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combinedNumbers = [...nums1, ...nums2];
// console.log(combinedNumbers);

//? the concat method
const nums3 = [1, 2, 3];
const nums4 = [4, 5, 6];
const combinedNumbers2 = nums3.concat(nums4);
// console.log(combinedNumbers2);
// concatenating multiple arrays
const nums5 = [1, 2, 3];
const nums6 = [4, 5, 6];
const nums7 = [7, 8, 9, 10];
const combinedNumbers3 = nums5.concat(nums6, nums7);
// console.log(combinedNumbers3);

// 3. Array.from with spread operator
const nums8 = [11, 12, 13];
const nums9 = [14, 15, 16];
const combinedNumbers4 = Array.from([...nums8, ...nums9]);
// console.log(combinedNumbers4);

//? merging objects (shallow merge)
const obj1 = { name: "alice", age: 30 };
const obj2 = { city: "new york", job: "software engineer" };
const mergedObjects = { ...obj1, ...obj2 };
// console.log(mergedObjects);

//? object.assign method
const obj3 = { name: "alice", age: 30 };
const obj4 = { city: "new york", job: "software engineer" };
const mergedObjects2 = Object.assign({}, obj3, obj4);
// console.log(mergedObjects2);

//?todo 3. Deep Merge with Recursive Function (Manual Approach):

//? copying arrays and objects
// copying by reference (primitive value)
let num1 = 10;
let num2 = num1;
// console.log(num1 === num2);
num2 = 20;
// console.log(num1 === num2); // num2 = 20

// copying arrays and object
// incorrect (shallow copy) - spread operator for arrays
const numbersShallow = [1, 2, 3, 4, 5];
const copiedNumberShallow = [...numbersShallow];
// console.log(numbersShallow === copiedNumberShallow);
// console.log(numbersShallow[0] === copiedNumberShallow[0]);

//!
numbersShallow[0] = 50;
// console.log(copiedNumberShallow[0] === 50);

//? Incorrect (Shallow Copy) - Spread Operator (...) for Objects:
const person = { name: "alice", age: 30 };
const copiedPerson = { ...person };
// console.log(person === copiedPerson);
// console.log(person.name === copiedPerson.name);

//!
person.name = "bob";
// console.log(copiedPerson.name === "bob");

//? correct methods for copying arrays and objects
//1. Slice Method for Arrays:
const numbersCorrect = [1, 2, 3, 4, 5];
const copiedNumbersCorrect = numbersCorrect.slice();
// console.log(numbersCorrect === copiedNumbersCorrect);
// console.log(numbersCorrect[0] === copiedNumbersCorrect[0]);
numbersCorrect[0] = 50;
// console.log(copiedNumbersCorrect === 50);

//2. Array.from with Spread Operator:
const numbersCorrect2 = [1, 2, 3];
const copiedNumbersCorrect2 = Array.from([...numbersCorrect2]);
// console.log(numbersCorrect2 === copiedNumbersCorrect2);
// console.log(numbersCorrect2[0] === copiedNumbersCorrect2[0]);

numbersCorrect2[0] = 50;
// console.log(copiedNumbersCorrect2 === 50);

//? Passing Arrays as arguments
//1. Passing by Reference:
function modifyArray(arr) {
  arr.push(100);
}

const numbersToModify = [1, 2, 3];
modifyArray(numbersToModify);
// console.log(numbersToModify);

//? Avoiding Unintended Modifications:
function modifyArray2(arr) {
  arr.push(100);
}

const numbersToModify2 = [1, 2, 3];
const copyOfNumbersToModify2 = numbersToModify2.slice();
modifyArray2(copyOfNumbersToModify2);
// console.log(numbersToModify2);
// console.log(copyOfNumbersToModify2);

// Spread Operator (...) (for Simple Cases):
function modifyArray3(arr) {
  arr.push(100);
}

const numbersToModify3 = [1, 2, 3];
modifyArray3([...numbersToModify3]);
// console.log(numbersToModify3);
