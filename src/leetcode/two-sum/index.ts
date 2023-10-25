// time: O(n), space: O(n)
export const solution = (input: number[], target: number): number[] => {
  const numToIndex = new Map();

  // input: [3, 2, 4], target: 6
  // i: 0, current: 3, difference: 3, has: false, map: { 3: 0 }
  // i: 1, current: 2, difference: 4, has: false, map: { 3: 0, 2: 1 }
  // i: 2, current: 4, difference: 2, has: true, map: { 3: 0, 2: 1 } -> [1, 2]

  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    const difference = target - current;

    if (numToIndex.has(difference)) {
      return [numToIndex.get(difference), i];
    }

    numToIndex.set(current, i);
  }

  return [];
};
