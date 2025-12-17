import { add, subtract, multiply, divide } from '../src';

test('adds two numbers correctly', () => {
  const result = add(10, 5);
  expect(result).toBe(15);
});

test('subtracts two numbers correctly', () => {
  const result = subtract(10, 5);
  expect(result).toBe(5);
});

test('multiplies two numbers correctly', () => {
  const result = multiply(10, 5);
  expect(result).toBe(50);
});

test('divides two numbers correctly', () => {
  const result = divide(10, 5);
  expect(result).toBe(2);
});