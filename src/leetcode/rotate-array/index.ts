const reverse = (nums: number[], start: number, end: number) => {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

// time: O(n), space: O(1)
export const rotateArray = (nums: number[], k: number) => {
  const n = nums.length;
  // Ensure k is within the range [0, n-1]
  k = k % n;

  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);
  // Reverse the first k elements
  reverse(nums, 0, k - 1);
  // Reverse the remaining elements
  reverse(nums, k, nums.length - 1);
};
