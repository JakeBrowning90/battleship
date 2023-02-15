import { sum } from "./sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('throw error if missing arguments', () => {
    function sum() {
        sum(1);
        expect(sum).toThrow('Provide 2 numbers.');
      }
});

test('throw error if arguments are not numbers', () => {
    function sum() {
        sum('1', 'two');
        expect(sum).toThrow("Enter numbers only.");
      }
});