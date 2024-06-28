// const person = new Map();
// person.set("age", 20);
// person.set(23, "node inter.");
// console.log(person.get(23));

// console.log(person.has(23));
// console.log(person.delete(23));
// console.log(person.has(23));

const s = new Set();
s.add(2);
s.add(3);
s.add(2);

console.log(s.size);
console.log(s.has(3));
console.log(s.has(4));
// console.log(s.delete(3));
console.log(s.has(3));
// console.log(s.entries());
s.forEach((val) => console.log(val * 2));
