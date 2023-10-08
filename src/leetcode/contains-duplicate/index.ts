// time: O(n), space: O(n)
export const solution = (nums: number[]): boolean => {
  return new Set(nums).size !== nums.length;
};
