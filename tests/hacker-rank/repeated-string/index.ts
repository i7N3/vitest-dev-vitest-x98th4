// return the number of letters "a" in the string
const as = (s: string) => s.split('').filter((i) => i === 'a').length;

// https://www.hackerrank.com/challenges/repeated-string
export const solution = (s: string, n: number): number => {
  return Math.floor(n / s.length) * as(s) + as(s.slice(0, n % s.length));
};
