import { describe, expect, it } from 'vitest';
import { moveZeroes } from '.';

describe('Move Zeroes', () => {
  it('should move zeroes to the end in a mixed array', () => {
    const nums1 = [0, 1, 0, 3, 12];
    moveZeroes(nums1);
    expect(nums1).deep.equal([1, 3, 12, 0, 0]);
  });

  it('should handle an array containing only a zero', () => {
    const nums2 = [0];
    moveZeroes(nums2);
    expect(nums2).deep.equal([0]);
  });
});
