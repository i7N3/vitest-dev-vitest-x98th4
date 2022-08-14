import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Array Manipulation', () => {
  it('Sample tests', () => {
    expect(
      solution(10, [
        [1, 5, 3],
        [4, 8, 7],
        [6, 9, 1],
      ])
    ).toBe(10);
    expect(
      solution(5, [
        [1, 2, 100],
        [2, 5, 100],
        [3, 4, 100],
      ])
    ).toBe(200);
  });
});
