import { describe, it, expect } from 'vitest';
import { removeDuplicatesFromSortedArray } from '.';

describe('Remove Duplicates from Sorted Array', () => {
  it('should return the new length for a short array with duplicates', () => {
    // Array after removal: [1, 2]
    expect(removeDuplicatesFromSortedArray([1, 1, 2])).toBe(2);
  });

  it('should return the new length for a longer array with multiple duplicates', () => {
    // Array after removal: [0, 1, 2, 3, 4]
    expect(
      removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
    ).toBe(5);
  });
});
