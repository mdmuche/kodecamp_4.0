function greet(name) {
  //beginning of the outer function scope
  let greeting = "hello, ";

  function sayHello() {
    console.log(greeting + name);
  }

  return sayHello;

  //end of the outer function scope
}

const myGreeting = greet("kodecampers");
myGreeting();

function one() {
  let a = 2;
  return a;
}
