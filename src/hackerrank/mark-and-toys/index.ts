// https://www.hackerrank.com/challenges/mark-and-toys

// time: O(n * log n) + O (n) loop, but dominated is sorting, space: O(1)
export const markAndToys = (
  source: number[],
  initialBudget: number
): number => {
  let maximumToys = 0,
    budget = initialBudget;

  const prices = source.sort((a, b) => a - b);

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price > budget) break;

    if (budget - price >= 0) {
      budget -= price;
      maximumToys++;
    }
  }

  return maximumToys;
};
