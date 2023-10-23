import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Count Triplets 1', () => {
  it('Sample tests', () => {
    expect(solution([1, 2, 2, 4], 2)).toBe(2);
    expect(solution([1, 3, 9, 9, 27, 81], 3)).toBe(6);
    expect(solution([1, 5, 5, 25, 125], 5)).toBe(4);
  });
});
