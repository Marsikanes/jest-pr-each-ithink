import { getDiscount } from './index3.js';

test.each([
  [500, 0],
  [1000, 5],
  [2000, 10],
  [5000, 20],
  [10000, 20],
])('getDiscount(%i) -> %i', (total, expected) => {
  expect(getDiscount(total)).toBe(expected);
});