import { describe, it, expect } from 'vitest';
import { bubbleSort } from '.';

describe('Sorting: Bubble Sort', () => {
  it('should not require swaps for an already sorted array', () => {
    expect(bubbleSort([1, 2, 3])).deep.equal({
      numSwaps: 0,
      firstElement: 1,
      lastElement: 3,
    });
  });

  it('should count swaps for a simple reverse-ordered array', () => {
    expect(bubbleSort([3, 2, 1])).deep.equal({
      numSwaps: 3,
      firstElement: 1,
      lastElement: 3,
    });
  });

  it('should correctly sort and count swaps for an unsorted array of four elements', () => {
    expect(bubbleSort([4, 2, 3, 1])).deep.equal({
      numSwaps: 5,
      firstElement: 1,
      lastElement: 4,
    });
  });
});
