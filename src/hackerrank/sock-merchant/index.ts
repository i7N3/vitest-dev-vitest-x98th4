// https://www.hackerrank.com/challenges/sock-merchant/

// time: O(n), space: O(n), n - length of input
export const sockMerchant = (input: number[]): number => {
  const memo: { [key: number]: number } = {};
  let pairs = 0;
  for (let i = 0; i < input.length; i++) {
    const key = input[i];
    memo[key] = key in memo ? memo[key] + 1 : 1;
    if (memo[key] === 2) {
      pairs++;
      memo[key] = 0;
    }
  }
  return pairs;
};
