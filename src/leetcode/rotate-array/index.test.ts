import { describe, it, expect } from 'vitest';
import { rotateArray } from '.';

describe('Rotate Array', () => {
  it('should rotate a long array by a non-zero number of steps', () => {
    const nums1 = [1, 2, 3, 4, 5, 6, 7];
    rotateArray(nums1, 3);
    expect(nums1).deep.equal([5, 6, 7, 1, 2, 3, 4]);
  });

  it('should rotate a short array by a non-zero number of steps', () => {
    const nums2 = [-1, -100, 3, 99];
    rotateArray(nums2, 2);
    expect(nums2).deep.equal([3, 99, -1, -100]);
  });

  it('should handle zero steps rotation', () => {
    const nums3 = [1, 2, 3, 4, 5];
    rotateArray(nums3, 0);
    expect(nums3).deep.equal([1, 2, 3, 4, 5]);
  });

  it('should handle rotation by the length of the array (no change)', () => {
    const nums4 = [1, 2, 3, 4, 5];
    rotateArray(nums4, 5);
    expect(nums4).deep.equal([1, 2, 3, 4, 5]);
  });
});
