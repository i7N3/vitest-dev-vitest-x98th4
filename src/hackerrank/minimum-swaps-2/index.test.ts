import { describe, it, expect } from 'vitest';
import { minimumSwaps2 } from '.';

describe('Minimum Swaps 2', () => {
  it('should return 0 for an empty array', () => {
    expect(minimumSwaps2([])).toBe(0);
  });

  it('should return 3 for various array configurations', () => {
    expect(minimumSwaps2([4, 3, 1, 2])).toBe(3);
    expect(minimumSwaps2([2, 3, 4, 1, 5])).toBe(3);
    expect(minimumSwaps2([1, 3, 5, 2, 4, 6, 7])).toBe(3);
    expect(minimumSwaps2([1, 3, 5, 2, 4, 6, 7])).toBe(3);
  });

  it('should return 5 for the array [7, 1, 3, 2, 4, 5, 6]', () => {
    expect(minimumSwaps2([7, 1, 3, 2, 4, 5, 6])).toBe(5);
  });

  it('should return 3 for the array [2, 4, 5, 1, 3]', () => {
    expect(minimumSwaps2([2, 4, 5, 1, 3])).toBe(3);
  });
});
