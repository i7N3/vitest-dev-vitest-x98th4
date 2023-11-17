import { describe, expect, it } from 'vitest';
import { plusOne } from '.';

describe('Plus One', () => {
  it('should increment the last digit of a simple array', () => {
    expect(plusOne([1, 2, 3])).deep.equal([1, 2, 4]);
  });

  it('should handle incrementing the last digit of a longer array', () => {
    expect(plusOne([4, 3, 2, 1])).deep.equal([4, 3, 2, 2]);
  });

  it('should handle carry-over for a single-digit array', () => {
    expect(plusOne([9])).deep.equal([1, 0]);
  });

  it('should handle carry-over for a two-digit array', () => {
    expect(plusOne([1, 9])).deep.equal([2, 0]);
  });

  it('should handle carry-over for all digits in the array', () => {
    expect(plusOne([9, 9])).deep.equal([1, 0, 0]);
  });

  it('should correctly increment a complex array with multiple digits', () => {
    expect(
      plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
    ).deep.equal([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  });
});
