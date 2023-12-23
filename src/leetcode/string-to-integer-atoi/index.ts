// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
const MIN = -Math.pow(2, 31);
const MAX = Math.pow(2, 31) - 1;

// time: O(n), space: O(1)
export const myAtoi = (s: string): number => {
  // 1. Read in and ignore any leading whitespace.
  let i = 0;
  while (s[i] === ' ') {
    i++;
  }

  // 2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
  let sign = 1;
  if (s[i] === '-' || s[i] === '+') {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  // 3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
  let result = 0;
  while (i < s.length) {
    const code = s.charCodeAt(i);
    // 0-9
    if (code < 48 || code > 57) {
      break;
    }
    // 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
    result = result * 10 + (code - 48);
    i++;
  }

  // 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
  result *= sign;

  if (result < MIN) {
    return MIN;
  }
  if (result > MAX) {
    return MAX;
  }

  // 6. Return the integer as the final result.
  return result;
};
