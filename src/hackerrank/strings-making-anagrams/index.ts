// https://www.hackerrank.com/challenges/ctci-making-anagrams

const ENGLISH_LOWERCASE_LETTERS = 26;
const LOWERCASE_A_CODE = 97;

// time: O(n + n + n) -> O(n), space: O(1)
export const solution = (a: string, b: string): number => {
  let result = 0;
  const freq = Array(ENGLISH_LOWERCASE_LETTERS).fill(0);

  // if some char in "a" then increment its frequency
  for (let i = 0; i < a.length; i++) {
    freq[a.charCodeAt(i) - LOWERCASE_A_CODE]++;
  }

  // if some char in "b" then decrement its frequency
  for (let i = 0; i < b.length; i++) {
    freq[b.charCodeAt(i) - LOWERCASE_A_CODE]--;
  }

  for (let i = 0; i < freq.length; i++) {
    // difference between two strings
    result += Math.abs(freq[i]);
  }

  return result;
};
