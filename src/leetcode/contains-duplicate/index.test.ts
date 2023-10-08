import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Contains Duplicate', () => {
  it('Sample tests', () => {
    expect(solution([1, 2, 3, 1])).toBe(true);
    expect(solution([1, 2, 3, 4])).toBe(false);
    expect(solution([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
