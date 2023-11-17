import { describe, it, expect } from 'vitest';
import { arrayManipulation } from '.';

describe('Array Manipulation', () => {
  it('should calculate the maximum value after a series of range-based updates on a larger array', () => {
    expect(
      arrayManipulation(10, [
        [1, 5, 3],
        [4, 8, 7],
        [6, 9, 1],
      ])
    ).toBe(10);
  });

  it('should calculate the maximum value after a series of range-based updates on a smaller array', () => {
    expect(
      arrayManipulation(5, [
        [1, 2, 100],
        [2, 5, 100],
        [3, 4, 100],
      ])
    ).toBe(200);
  });
});
