import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Merge Sort: Counting Inversions', () => {
  it('Sample tests', () => {
    expect(solution([1, 1, 1, 2, 2])).toBe(0);
    expect(solution([2, 1, 3, 1, 2])).toBe(4);
    expect(solution([1, 5, 3, 7])).toBe(1);
    expect(solution([7, 5, 3, 1])).toBe(6);
    expect(solution([1, 3, 5, 7])).toBe(0);
    expect(solution([3, 2, 1])).toBe(3);
  });
});
