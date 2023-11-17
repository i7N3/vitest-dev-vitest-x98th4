// time: O(n), space: O(1)
export const removeDuplicatesFromSortedArray = (input: number[]): number => {
  const uniqueSet = new Set<number>();
  let uniqueIndex = 0;

  for (let i = 0; i < input.length; i++) {
    if (!uniqueSet.has(input[i])) {
      input[uniqueIndex] = input[i];
      uniqueSet.add(input[i]);
      uniqueIndex++;
    }
  }

  input.length = uniqueIndex;

  return uniqueIndex;
};
