import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Mark and Toys', () => {
  it('Sample tests', () => {
    expect(solution([1, 2, 3, 4], 7)).toBe(3);
    expect(solution([1, 12, 5, 111, 200, 1000, 10], 50)).toBe(4);
    expect(solution([3, 7, 2, 9, 4], 15)).toBe(3);
  });
});
