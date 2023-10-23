// https://www.hackerrank.com/challenges/ctci-bubble-sort
type Result = {
  numSwaps: number;
  firstElement: number;
  lastElement: number;
};

// time: O(n^2), space: O(1)
export const solution = (input: number[]): Result => {
  let numSwaps = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - 1; j++) {
      if (input[j] > input[j + 1]) {
        const first = input[j];
        const second = input[j + 1];

        input[j] = second;
        input[j + 1] = first;
        numSwaps++;
      }
    }
  }

  const firstElement = input[0];
  const lastElement = input[input.length - 1];

  return { numSwaps, firstElement, lastElement };
};
