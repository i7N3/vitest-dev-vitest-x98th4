import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Rotate Array', () => {
  it('Sample tests', () => {
    const nums1 = [1, 2, 3, 4, 5, 6, 7];
    solution(nums1, 3);
    expect(nums1).deep.equal([5, 6, 7, 1, 2, 3, 4]);

    const nums2 = [-1, -100, 3, 99];
    solution(nums2, 2);
    expect(nums2).deep.equal([3, 99, -1, -100]);

    const nums3 = [1, 2, 3, 4, 5];
    solution(nums3, 0);
    expect(nums3).deep.equal([1, 2, 3, 4, 5]);

    const nums4 = [1, 2, 3, 4, 5];
    solution(nums4, 5);
    expect(nums4).deep.equal([1, 2, 3, 4, 5]);
  });
});
