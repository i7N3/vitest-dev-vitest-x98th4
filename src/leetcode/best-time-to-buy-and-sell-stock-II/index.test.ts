import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Best Time to Buy and Sell Stock II', () => {
  it('Sample tests', () => {
    expect(solution([7, 1, 5, 3, 6, 4])).toBe(7);
    expect(solution([1, 2, 3, 4, 5])).toBe(4);
    expect(solution([7, 6, 4, 3, 1])).toBe(0);
    expect(solution([7])).toBe(0);
  });
});
