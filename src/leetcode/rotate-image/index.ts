/**
 *
 * How to rotate matrix by 90 deg in-place?
 *
 * Step 1: Transpose - the rows become columns and the columns become rows.
 *
 * 1 2 3  ->  1 4 7
 * 4 5 6  ->  2 5 8
 * 7 8 9  ->  3 6 9
 *
 * Step 2: Reverse each row
 *
 * 1 4 7  ->  7 4 1
 * 2 5 8  ->  8 5 2
 * 3 6 0  ->  0 6 3
 *
 */

// time: O(n^2), space: O(1)
export const solution = (matrix: number[][]): void => {
  const n = matrix.length;

  // 1. Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 2. Reverse each row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      [matrix[i][j], matrix[i][n - 1 - j]] = [
        matrix[i][n - 1 - j],
        matrix[i][j],
      ];
    }
  }
};
