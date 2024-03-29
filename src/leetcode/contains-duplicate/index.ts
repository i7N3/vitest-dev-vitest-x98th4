// time: O(n), space: O(n)
export const containsDuplicate = (nums: number[]): boolean => {
  return new Set(nums).size !== nums.length;
};
