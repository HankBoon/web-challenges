import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("returns the the sum of the paramaters a and b by running add(a,b)", () => {
  const result1 = add(2, 3);
  expect(result1).toBe(5);
  const result2 = add(-10, 3);
  expect(result2).toBeLessThan(0);
  const result3 = add(0.1, 0.2);
  expect(result3).toBeCloseTo.toString(0.3);
});

test("returns the the difference of the paramaters a and b by running subtract(a,b)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
  const result2 = subtract(3, 4);
  expect(result2).toBeLessThan(0);
});

test("returns the the product of the paramaters a and b by running multiply(a,b)", () => {
  const result1 = multiply(2, 4);
  expect(result1).toBe(8);
  const result2 = multiply(-1, 4);
  expect(result2).toBeLessThan(0);
  const result3 = multiply(4, -1);
  expect(result3).toBeLessThan(0);
  const result4 = multiply(-2, -2);
  expect(result4).toBeGreaterThan(0);
});

test("returns the the quotient of the paramaters a and b by running divide(a,b)", () => {
  const result1 = divide(9, 3);
  expect(result1).toBe(3);
  const result2 = divide(9, 0);
  expect(result2).toEqual("You should not do this!");
});
