//? 1. private variables and method
function createCounter() {
  let count = 0;

  function increament() {
    count++;
  }

  function getCount() {
    return count;
  }

  return {
    increament,
    getCount,
  };
}
const counter1 = createCounter();
counter1.increament();
console.log(counter1.getCount());

//? 2. callbacks with preserved state
function buttonClickHandler(message) {
  let counter = 0;

  function handleClick() {
    counter++;
    console.log(message + " clicked " + counter + " times.");
  }

  return handleClick;
}

const clickHandler = buttonClickHandler("Button");
document.getElementById("myButton").addEventListener("click", clickHandler);

//? 3. higher order functions (HOFs)
function _map(arr, callback) {
  let newArr = [];

  for (const el of arr) {
    newArr.push(callback(el));
  }

  return newArr;
}

const numbers = [1, 2, 3, 4];
const doubledNumbers = _map(numbers, (num) => 2 * num);
console.log(doubledNumbers); // output [ 2, 4, 6, 8 ]

//? 4. partial function applications
function add(x, y) {
  return x + y;
}

const add5 = add.bind(null, 5); // partially applied function to add 5 to any number
console.log(add5(10));
