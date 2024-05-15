//? 1. accessing variables
function createCounter() {
  let count = 0;

  function increament() {
    count++;
    console.log("count inside closure", count);
  }

  return increament;
}

const counter1 = createCounter();
counter1(); // output => count inside closure 1

//? 2. modifying variables
function createCounter2() {
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

const counter2 = createCounter2();
counter2.increament();
counter2.increament();
console.log(counter2.getCount()); // output => 2
