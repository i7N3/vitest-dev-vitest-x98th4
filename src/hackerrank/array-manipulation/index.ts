// https://www.hackerrank.com/challenges/crush

// time: O(m + n), space: O(n)
export const arrayManipulation = (n: number, m: number[][]): number => {
  const arr = Array(n + 2).fill(0);

  for (let i = 0; i < m.length; i++) {
    const [a, b, k] = m[i];
    arr[a] += k;
    arr[b + 1] -= k;
  }

  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    max = Math.max(max, sum);
  }

  return max;
};
