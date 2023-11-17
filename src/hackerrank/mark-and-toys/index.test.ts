import { describe, it, expect } from 'vitest';
import { markAndToys } from '.';

describe('Mark and Toys', () => {
  it('should return 3 when the budget is 7', () => {
    expect(markAndToys([1, 2, 3, 4], 7)).toBe(3);
  });

  it('should return 4 when the budget is 50', () => {
    expect(markAndToys([1, 12, 5, 111, 200, 1000, 10], 50)).toBe(4);
  });

  it('should return 3 when the budget is 15', () => {
    expect(markAndToys([3, 7, 2, 9, 4], 15)).toBe(3);
  });
});
