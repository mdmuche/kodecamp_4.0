//? Array
const languages = ["py", "js", "java"];

for (const lang of languages) {
  console.log(lang);
}

//? Strings
const message = "Hello, world!";

for (const char of message) {
  console.log(char); // output => all chars including whitespaces
}

//? Sets
const colors = new Set(["red", "blue", "green", "red"]);

for (const color of colors) {
  console.log(color);
}

//? Maps
const person = new Map([
  ["name", "kodecamp"],
  ["age", 4],
]);

for (const [key, value] of person) {
  console.log(`${key} : ${value}`);
}

//? string literals (es6 and above)
for (const char of "hello") {
  console.log(char);
}
