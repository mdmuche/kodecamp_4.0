//? arrow functions
//?1. no arguments binding
//? Traditional Functions and the arguments Object:
function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

// console.log(sum(1, 2, 3));

//? Arrow Functions and the Missing arguments:
//? Alternatives for Accessing Arguments in Arrow Functions:
//a. Function Parameters:
const sum2 = (num1, num2) => {
  return num1 + num2;
};

// console.log(sum2(1, 2));

//b. Rest Parameters
const multiplyAll = (...nums) => {
  let product = 1;

  for (const num of nums) {
    product *= num;
  }

  return product;
};

// console.log(multiplyAll(3, 4, 5));

//?2 No this binding
//? this Keyword in Traditional Functions:
const person = {
  name: "kodecamp",
  sayHi() {
    // console.log("hello, " + this.name + "!");
  },
};

person.sayHi();
const anotherPerson = person.sayHi;
anotherPerson();

const anotherPerson2 = person.sayHi.bind(person);
anotherPerson2();

//? this Binding in Arrow Functions:
const person2 = {
  name: "",
  sayHi: () => {
    // console.log("hello, " + this.name + "!");
  },
};

person2.sayHi();
const anotherPerson3 = person2.sayHi;
anotherPerson3();
