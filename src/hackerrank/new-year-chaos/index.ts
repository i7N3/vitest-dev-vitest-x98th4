// https://www.hackerrank.com/challenges/new-year-chaos/

// time: O(n), space: O(1)
export const newYearChaos = (queue: number[]): number | null => {
  let totalBribes = 0,
    expectedAtPosition1 = 1,
    expectedAtPosition2 = 2,
    expectedAtPosition3 = 3;

  for (let i = 0; i < queue.length; i++) {
    const current = queue[i];

    if (current === expectedAtPosition1) {
      expectedAtPosition1 = expectedAtPosition2;
      expectedAtPosition2 = expectedAtPosition3;
      expectedAtPosition3++;
    } else if (current === expectedAtPosition2) {
      totalBribes += 1;
      expectedAtPosition2 = expectedAtPosition3;
      expectedAtPosition3++;
    } else if (current === expectedAtPosition3) {
      totalBribes += 2;
      expectedAtPosition3++;
    } else {
      return null; // Too chaotic, more than 3 bribes
    }
  }

  return totalBribes;
};
