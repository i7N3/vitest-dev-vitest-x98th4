// hackerrank.com/challenges/alternating-characters

// time: O(n), space: O(1)
export const solution = (input: string): number => {
  let minimum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) minimum++;
  }
  return minimum;
};
