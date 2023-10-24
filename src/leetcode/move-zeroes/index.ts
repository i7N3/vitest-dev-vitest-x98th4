// time: O(n), space: O(1)
export const solution = (input: number[]): void => {
  // Using two pointers approach
  let index = 0;
  let nonZeroIndex = 0;

  // index = 1, nonZeroIndex = 0 [0, 1, 0, 3, 12]
  // index = 2, nonZeroIndex = 1 [1, 0, 0, 3, 12]
  // index = 3, nonZeroIndex = 1 [1, 3, 0, 0, 12]
  // index = 4, nonZeroIndex = 2 [1, 3, 12, 0, 0]
  while (index < input.length) {
    if (input[index] !== 0) {
      const temp = input[index];
      input[index] = input[nonZeroIndex];
      input[nonZeroIndex] = temp;
      nonZeroIndex++;
    }
    index++;
  }
};
