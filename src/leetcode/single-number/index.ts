// time: O(n), space: O(1)
export const solution = (nums: number[]): number => {
  let unique = 0;
  for (let i = 0; i < nums.length; i++) {
    unique ^= nums[i];
  }
  return unique;
};
