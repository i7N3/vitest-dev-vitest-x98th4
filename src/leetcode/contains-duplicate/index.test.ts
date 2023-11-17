import { describe, it, expect } from 'vitest';
import { containsDuplicate } from '.';

describe('Contains Duplicate', () => {
  it('should return true for an array with duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it('should return false for an array with all unique elements', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it('should return true for an array with multiple duplicates', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
