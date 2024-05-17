//? 1. currying and partial application
// function add(x, y) {
//   return x + y;
// }

// const add5 = add.bind(null, 5);
// console.log(add5(10));

// //? 2. memoization
// function useMemo(fn) {
//   let cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache[key] !== undefined) {
//       return cache[key];
//     }
//     cache[key] = fn.apply(this, args);
//     return cache[key];
//   };
// }

// const add = (a, b) => {
//   console.log("add called only once");
//   return a + b;
// };

// const memoizeAdd = useMemo(add);
// console.log(memoizeAdd(1, 2));
// console.log(memoizeAdd(1, 2));
// console.log(memoizeAdd(3, 4));
// console.log(memoizeAdd(3, 4));

// function useCallbackAsync(fn) {
//   let lastArgs = [];
//   let lastResult = null;

//   return async function (...args) {
//     if (
//       args.length !== lastArgs.length ||
//       args.some((arg, index) => arg !== lastArgs[index])
//     ) {
//       console.log("calculating...");
//       lastArgs = args;
//       lastResult = await fn(...args);
//     } else {
//       console.log("cached");
//     }
//     return lastResult;
//   };
// }

// function add3(x, y) {
//   return x + y;
// }

// const memoizeAdd3 = useCallbackAsync(add3);
// console.log(memoizeAdd3(1, 2));
// console.log(memoizeAdd3(1, 2));
// console.log(memoizeAdd3(3, 4));
// console.log(memoizeAdd3(3, 4));

function useCallback(config) {
  const { fn, async } = config;
  let lastArgs = [];
  let lastResult = null;

  if (async) {
    return async function (...args) {
      if (
        args.length !== lastArgs.length ||
        args.some((arg, index) => arg !== lastArgs[index])
      ) {
        console.log("calculating...");
        lastArgs = args;
        lastResult = await fn(...args);
      } else {
        console.log("cached");
      }
      return lastResult;
    };
  } else {
    return function (...args) {
      if (
        args.length !== lastArgs.length ||
        args.some((arg, index) => arg !== lastArgs[index])
      ) {
        console.log("calculating");
        lastArgs = args;
        lastResult = fn(...args);
      } else {
        console.log("cached");
      }
      return lastResult;
    };
  }
}

function add4(x, y) {
  return x + y;
}

const returnedValue = useCallback({ fn: add4 });
console.log(returnedValue(1, 2));
console.log(returnedValue(1, 2));
console.log(returnedValue(3, 4));
console.log(returnedValue(3, 4));
