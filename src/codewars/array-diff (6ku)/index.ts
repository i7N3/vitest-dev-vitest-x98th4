// https://www.codewars.com/kata/523f5d21c841566fde000009/train/typescript
export const solution = (a: number[], b: number[]): number[] => {
  return a.reduce((acc, current) => {
    if (!b.includes(current)) acc.push(current);
    return acc;
  }, [] as number[]);
};
