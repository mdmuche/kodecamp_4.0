//? classes declaration
class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  getName() {
    return this.name;
  }

  getYear() {
    return this.year;
  }
}

const firstPerson = new Person("kodecamp", 2024);
// console.log(firstPerson.getName());
// console.log(firstPerson.getYear());

// Constructor method
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    // console.log("hello " + this.name + "!");
  }
}

const person2 = new Person2("kodecamp", 30);
person2.greet();

//? properties
//1. class properties
class Person3 {
  name = "anonymous";
  age;
}

// 2. Constructor Properties:
class Person4 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//? inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    // console.log("generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    // console.log("woof! " + this.name + " is an " + this.breed);
  }
}

const bingo = new Dog("bingo", "ekuke");
bingo.makeSound();

//? Super Keyword
// accessing parent class method

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    // console.log("generic animal sound");
  }
}

class Dog2 extends Animal2 {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    super.makeSound();
    // console.log("woof! " + this.name + " is an " + this.breed);
  }
}

const bingo2 = new Dog2("bingo", "ekuke");
bingo2.makeSound();

// Getters and Setters
//getters
class Person5 {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }
}

const person5 = new Person5("kodecamp");
// console.log(person5.name);

// setters
class Person6 {
  constructor(name) {
    this._name = name;
  }

  set name(newName) {
    if (newName.length < 2) {
      //   console.error("name must be atleast two characters");
      return;
    }
    this._name = newName;
    // console.log(this._name);
  }
}

const person6 = new Person6("kodecamp");
// person6.name = "k";
person6.name = "kamp";
