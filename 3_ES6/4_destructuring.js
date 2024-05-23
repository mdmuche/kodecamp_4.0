//?1. array destructuring
const numbers = [1, 2, 3, 4, 5];
const [fn, sn] = numbers;
// console.log(fn, sn);

//? rest parameter
const [fnn, ...other] = numbers;
// console.log(other);

//? destructuring with default values
const numbers2 = [1];
const [fn1 = 3, fn2 = 6] = numbers2;
// console.log(fn1, fn2);

//?2. object destructuring
const person = {
  name: "kodecamp",
  age: 4,
};

const { name, age } = person;
// console.log(name, age);

//? destructuring with different variable name
const { name: fullName, age: fullAge } = person;
// console.log(fullName, fullAge);

//? default values
const person2 = {};

const { personName = "anonymous", personAge = 0 } = person2;
// console.log(personName, personAge);

const someNumbers = [1];
const [sn1 = 5, sn2 = 2] = someNumbers;
// console.log(sn1, sn2);

//? nested destructuring
const data = {
  user: {
    name: "Kodecamp",
    address: {
      state: "Akwa Ibom",
      country: "Nigeria",
    },
  },
};

const {
  user: {
    address: { state },
  },
} = data;
// console.log(state);
// console.log(name);

//? rest parameter
const person3 = {
  person_3_name: "kodecamp",
  state: "akwa ibom",
  country: "nigeria",
};

const { person_3_name, ...person_others } = person3;
// console.log(person_3_name);
// console.log(person_others);

//? parameter destructuring
// Destructuring Array Arguments:
function greet(name, age) {
  //   console.log("Hello, " + name + "! You are " + age + " years old.");
}
const personArray = ["kodecamp", 4];
greet(...personArray);

// Destructuring equivalent (cleaner)
function greet([name, age]) {
  //   console.log("Hello, " + name + "! You are " + age + " years old.");
}

greet(personArray); // Array directly passed (destructuring happens within the function)

//? destructuring object argument
function createUser(options) {
  const name = options.name;
  const age = options.age;
  //   console.log(name, age);
}

const userOptions = {
  name: "kodecamp",
  age: 4,
};

createUser(userOptions);

// Destructuring equivalent (cleaner)
function createUser2({ name, age }) {
  //   console.log(name, age);
}

const userOptions2 = {
  name: "kodecamp",
  age: 4,
};
createUser2(userOptions2);

// default values on destructured parameters
function createUser3({ name = "Anonymous", age = 0 }) {
  //   console.log(name, age);
}

const userOptions3 = {
  name: "check kodecamp",
  age: 35,
};

createUser3(userOptions3);

//?todo Computed Parameter Names:
//?todo destructuring with aliases
