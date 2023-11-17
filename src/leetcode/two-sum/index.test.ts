import { describe, expect, it } from 'vitest';
import { twoSum } from '.';

describe('Two Sum', () => {
  it('should return indices of the two numbers such that they add up to the target (simple case)', () => {
    expect(twoSum([2, 7, 11, 15], 9)).deep.equal([0, 1]);
  });

  it('should return indices of the two numbers from a list of unique elements', () => {
    expect(twoSum([3, 2, 4], 6)).deep.equal([1, 2]);
  });

  it('should return indices of the two identical numbers adding up to the target', () => {
    expect(twoSum([3, 3], 6)).deep.equal([0, 1]);
  });

  it('should handle cases with more than two possible addends', () => {
    expect(twoSum([3, 2, 3], 6)).deep.equal([0, 2]);
  });
});
