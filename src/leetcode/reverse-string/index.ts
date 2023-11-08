// time: O(n), space: O(1), in-place
export const solution = (input: string[]): void => {
  for (let i = 0, j = input.length - 1; i < input.length / 2; i++, j--) {
    const temp = input[i];
    input[i] = input[j];
    input[j] = temp;
  }
};
