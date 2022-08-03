// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/typescript
export const solution = (array: string[]): string[] => {
  return array.map((s, idx) => `${idx + 1}: ` + s);
};
