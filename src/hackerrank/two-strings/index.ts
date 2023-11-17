// https://www.hackerrank.com/challenges/two-strings/

// time: O(n * m), space: O(1), n - len s1, m - len  s2
export const twoStrings = (s1: string, s2: string): string => {
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) return 'YES';
  }
  return 'NO';
};
