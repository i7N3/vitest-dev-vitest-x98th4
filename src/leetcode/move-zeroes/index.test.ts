import { describe, expect, it } from 'vitest';
import { solution } from '.';

describe('Move Zeroes', () => {
  it('Sample tests', () => {
    const nums1 = [0, 1, 0, 3, 12];
    solution(nums1);
    expect(nums1).deep.equal([1, 3, 12, 0, 0]);

    const nums2 = [0];
    solution(nums2);
    expect(nums2).deep.equal([0]);
  });
});
