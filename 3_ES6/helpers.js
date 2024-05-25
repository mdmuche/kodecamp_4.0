import { add } from "./math.js";

export function multiplyUsingAdd(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result = add(result, a);
  }

  return result;
}
