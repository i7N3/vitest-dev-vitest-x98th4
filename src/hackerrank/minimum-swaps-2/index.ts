// https://www.hackerrank.com/challenges/minimum-swaps-2

// time: O(n), space: O(1)
export const minimumSwaps2 = (arr?: number[] | null): number => {
  if (!arr || arr.length === 0) return 0;

  let swapsCount = 0;
  let position = 0;

  while (position !== arr.length - 1) {
    const current = arr[position];

    if (current === position + 1) {
      position++;
    } else {
      const idxToSwap = current - 1;
      const toSwap = arr[idxToSwap];
      arr[idxToSwap] = current;
      arr[position] = toSwap;
      swapsCount++;
    }
  }

  return swapsCount;
};
