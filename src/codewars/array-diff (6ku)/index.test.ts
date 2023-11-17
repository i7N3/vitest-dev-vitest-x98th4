import { describe, it, expect } from 'vitest';
import { arrayDiff } from '.';

describe('Array.diff (6ku)', () => {
  it('should return the first array when the second array is empty', () => {
    expect(arrayDiff([], [4, 5])).to.eql([], 'a was [], b was [4,5]');
  });

  it('should remove common elements found in the second array', () => {
    expect(arrayDiff([3, 4], [3])).to.eql([4], 'a was [3, 4], b was [3]');
  });

  it('should return the first array as is when the second array is empty', () => {
    expect(arrayDiff([1, 8, 2], [])).to.eql(
      [1, 8, 2],
      'a was [1, 8, 2], b was []'
    );
  });

  it('should remove all elements from the first array that are found in the second array', () => {
    expect(arrayDiff([1, 2, 3], [1, 2])).to.eql(
      [3],
      'a was [1, 2, 3], b was [1, 2]'
    );
  });
});
