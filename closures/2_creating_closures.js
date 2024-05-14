//? regular function declaration
function createMultiplierDeclaration(multiplier) {
  function multiply(num) {
    return num * multiplier;
  }

  return multiply;
}

//create multiplier for 20 using using function declaration
const multiplierDeclaration = createMultiplierDeclaration(20);

//use the closure to multiply a number
const resultDeclaration = multiplierDeclaration(5);
console.log(`5 multiply by 20 (declaration) is ${resultDeclaration}`); // output 100

//? arrow function declaration
function createMultiplierDeclaration2(multiplier) {
  const multiply = (num) => num * multiplier;
  return multiply;
}

//create multiplier for 20 using using function declaration
const multiplierDeclaration2 = createMultiplierDeclaration2(20);

//use the closure to multiply a number
const resultDeclaration2 = multiplierDeclaration2(5);
console.log(`5 multiply by 20 (declaration) is ${resultDeclaration2}`); // output 100

//? regular function expression
function createMultiplierDeclaration3(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

//create multiplier for 20 using using function declaration
const multiplierDeclaration3 = createMultiplierDeclaration3(20);

//use the closure to multiply a number
const resultDeclaration3 = multiplierDeclaration3(5);
console.log(`5 multiply by 20 (declaration) is ${resultDeclaration3}`); // output 100

//? arrow function expression
function createMultiplierDeclaration4(multiplier) {
  return (num) => num * multiplier;
}

//create multiplier for 20 using using function declaration
const multiplierDeclaration4 = createMultiplierDeclaration4(20);

//use the closure to multiply a number
const resultDeclaration4 = multiplierDeclaration4(5);
console.log(`5 multiply by 20 (declaration) is ${resultDeclaration4}`); // output 100

//? arrow function expression
const createMultiplierDeclaration5 = (multiplier) => (num) => num * multiplier;

//create multiplier for 20 using using function declaration
const multiplierDeclaration5 = createMultiplierDeclaration5(20);

//use the closure to multiply a number
const resultDeclaration5 = multiplierDeclaration5(5);
console.log(`5 multiply by 20 (declaration) is ${resultDeclaration5}`); // output 100

//? nested functions and closures
function createCount() {
  let count = 0;

  function increament() {
    count++;
    console.log(count);
  }

  return increament;
}
const counter1 = createCount();
counter1();
counter1();
