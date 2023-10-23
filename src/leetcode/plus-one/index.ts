// time: O(n), space: O(n)
export const solution = (digits: number[]): number[] => {
  // Start from the last digit (rightmost) and move towards the left.
  for (let i = digits.length - 1; i >= 0; i--) {
    // If the current digit is less than 9, we can simply increment it.
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      // If the current digit is 9, set it to 0 (carry over) and continue to the next digit.
      digits[i] = 0;
    }
  }

  // If we've reached -> all digits were 9 -> add a new leading 1
  digits.unshift(1);
  return digits;
};
