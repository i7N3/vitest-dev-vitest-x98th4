// https://www.hackerrank.com/challenges/ctci-array-left-rotation/

// time: O(n), space: O(n)
export const arraysLeftRotation = (a: number[], d: number): number[] => {
  return [...a.slice(d), ...a.slice(0, d)];
};
