import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Remove Duplicates from Sorted Array', () => {
  it('Sample tests', () => {
    expect(solution([1, 1, 2])).toBe(2);
    expect(solution([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });
});
