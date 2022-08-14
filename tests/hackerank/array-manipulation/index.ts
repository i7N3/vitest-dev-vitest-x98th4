// https://www.hackerrank.com/challenges/crush
export const solution = (n: number, queries: number[][]): number => {
  const arr = Array(n + 2).fill(0);

  for (let i = 0; i < queries.length; i++) {
    const [a, b, k] = queries[i];
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
