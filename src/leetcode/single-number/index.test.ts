import { describe, expect, it } from 'vitest';
import { singleNumber } from '.';

describe('Single Number', () => {
  it('should find the single number in an array with one unique and one duplicate element', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  it('should find the single number in a larger array with multiple duplicates', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });

  it('should return the single number when the array contains only one element', () => {
    expect(singleNumber([1])).toBe(1);
  });
});
