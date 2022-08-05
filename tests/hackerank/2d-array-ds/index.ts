// https://www.hackerrank.com/challenges/2d-array/
export const solution = (arr: number[][]): number => {
  let maxSum = -Infinity;
  let total = 0;

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      total += arr[row][col] + arr[row][col + 1] + arr[row][col + 2];
      total += arr[row + 1][col + 1];
      total +=
        arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];

      if (total > maxSum) maxSum = total;
      total = 0;
    }
  }

  return maxSum;
};
