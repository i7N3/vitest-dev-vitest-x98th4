// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/typescript

// time: O(n log n), space: O(1)
export const sortArrayOfNumbers = (nums: number[]): number[] => {
  return nums.sort((a, b) => a - b);
};
