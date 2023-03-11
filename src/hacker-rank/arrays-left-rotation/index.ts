// https://www.hackerrank.com/challenges/ctci-array-left-rotation/
export const solution = (a: number[], d: number): number[] => {
  return [...a.slice(d), ...a.slice(0, d)];
};
