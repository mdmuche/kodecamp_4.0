const person = {
  name: "kodecamp",
  age: 4,
};

//? 1.using for in loop
for (const key in person) {
  console.log(key, person[key]);
}

//? 2.using object.keys
const keys = Object.keys(person);

for (const key of keys) {
  console.log(key);
}

//? 3.using object.values
const values = Object.values(person);

for (const value of values) {
  console.log(value);
}

//? 4.using object.entries
const entries = Object.entries(person);

for (const [key, value] of entries) {
  console.log(`${key} : ${value}`);
}
