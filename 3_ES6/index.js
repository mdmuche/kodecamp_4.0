import { sub } from "./math.js";
import { mul } from "./utils.js";
import { multiplyUsingAdd } from "./helpers.js";

const res1 = sub(12, 8);
const res2 = mul(12, 8);
const res3 = multiplyUsingAdd(12, 8);

console.log(res1, res2, res3);
