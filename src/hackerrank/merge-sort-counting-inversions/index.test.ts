import { describe, it, expect } from 'vitest';
import { mergeSortCountingInversions } from '.';

describe('Merge Sort: Counting Inversions', () => {
  it('should return 0 for already sorted arrays', () => {
    expect(mergeSortCountingInversions([1, 1, 1, 2, 2])).toBe(0);
    expect(mergeSortCountingInversions([1, 3, 5, 7])).toBe(0);
  });

  it('should return the correct count of inversions for various arrays', () => {
    expect(mergeSortCountingInversions([2, 1, 3, 1, 2])).toBe(4);
    expect(mergeSortCountingInversions([1, 5, 3, 7])).toBe(1);
    expect(mergeSortCountingInversions([7, 5, 3, 1])).toBe(6);
    expect(mergeSortCountingInversions([3, 2, 1])).toBe(3);
  });
});
