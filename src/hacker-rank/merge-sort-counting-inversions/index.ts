// https://www.hackerrank.com/challenges/ctci-merge-sort

// time: O(n log n), space: O(n log n)
export const solution = (source: number[]): number => {
  const [sorted, inversions] = sort(source);
  return inversions;
};

// time: O(n log n), space: O(n)
const sort = (source: number[]): [number[], number] => {
  if (source.length === 1) return [source, 0];

  const half = Math.ceil(source.length / 2);
  const [left, leftInversions] = sort(source.slice(0, half));
  const [right, rightInversions] = sort(source.slice(half));

  const [sorted, mergeInversions] = merge(left, right);

  return [sorted, leftInversions + rightInversions + mergeInversions];
};

// time: O(n), space: O(n)
const merge = (left: number[], right: number[]): [number[], number] => {
  let i = 0,
    j = 0,
    inversions = 0;
  const result: number[] = [];

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      result.push(right[j++]);
      inversions += left.length - i;
    } else {
      result.push(left[i++]);
    }
  }

  return [result.concat(left.slice(i)).concat(right.slice(j)), inversions];
};
