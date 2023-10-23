import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Minimum Swaps 2', () => {
  it('Sample tests', () => {
    expect(solution([])).toBe(0);
    expect(solution([4, 3, 1, 2])).toBe(3);
    expect(solution([2, 3, 4, 1, 5])).toBe(3);
    expect(solution([1, 3, 5, 2, 4, 6, 7])).toBe(3);
    expect(solution([1, 3, 5, 2, 4, 6, 7])).toBe(3);
    expect(solution([7, 1, 3, 2, 4, 5, 6])).toBe(5);
    expect(solution([2, 4, 5, 1, 3])).toBe(3);
  });
});
