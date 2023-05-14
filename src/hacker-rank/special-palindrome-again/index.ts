// time: O(n^2), space: O(1)
export const solution = (input: string): number => {
  const length = input.length;
  let result = 0;
  let i = 0;

  // Case 1: Count all substrings where all characters are the same
  while (i < length) {
    let charCount = 1;
    while (i + 1 < input.length && input[i] === input[i + 1]) {
      i++;
      charCount++;
    }

    // Add the number of substrings for the current character
    result += (charCount * (charCount + 1)) / 2;
    i++;
  }

  // Case 2: Count all palindrome substrings
  for (i = 1; i < length; i++) {
    let charCount = 1;
    while (
      i - charCount >= 0 &&
      i + charCount < input.length &&
      input[i - 1] !== input[i] &&
      input[i - 1] === input[i - charCount] &&
      input[i - 1] === input[i + charCount]
    ) {
      charCount++;
    }

    // Add the number of palindrome substrings found
    result += charCount - 1;
  }

  return result;
};
