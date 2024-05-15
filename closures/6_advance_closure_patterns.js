//? 1. currying and partial application
function add(x, y) {
  return x + y;
}

const add5 = add.bind(null, 5);
console.log(add5(10));

//? 2. memoization
function useMemo(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    }
    cache[key] = fn.apply(this, args);
    return cache[key];
  };
}

const add = (a, b) => {
  console.log("add called only once");
  return a + b;
};

const memoizeAdd = useMemo(add);
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(3, 4));
console.log(memoizeAdd(3, 4));
