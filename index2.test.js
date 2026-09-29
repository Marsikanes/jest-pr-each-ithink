import { fizzBuzz } from './index2.js';

test.each`
  n     | expected
  ${1}  | ${'1'}
  ${3}  | ${'Fizz'}
  ${5}  | ${'Buzz'}
  ${15} | ${'FizzBuzz'}
`('fizzBuzz($n) -> $expected', ({ n, expected }) => {
  expect(fizzBuzz(n)).toBe(expected);
});