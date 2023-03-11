// https://www.hackerrank.com/challenges/two-strings/
export const solution = (s1: string, s2: string): string => {
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) return 'YES';
  }
  return 'NO';
};
