// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

// time: O(n), space: O(1)
export const jumpingOnTheClouds = (c: number[]): number => {
  let jumps = 0;

  for (let i = 0; i < c.length; ) {
    const maxStep = c[i + 2];
    if (i > 0) jumps++;
    if (maxStep === 0) i = i + 2;
    else i++;
  }

  return jumps;
};
