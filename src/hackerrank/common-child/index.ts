// https://www.hackerrank.com/challenges/common-child

// time: O(m * n), space: O(m * n)
export const solution = (input1: string, input2: string): number => {
  const dp: number[][] = [];

  const n = input1.length;
  const m = input2.length;

  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m + 1).fill(0);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (input1[i - 1] === input2[j - 1]) {
        // If the characters match, extend the common subsequence
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // If the characters do not match, take the maximum of the previous lengths
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n][m];
};
