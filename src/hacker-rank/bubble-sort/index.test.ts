import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Sorting: Bubble Sort', () => {
  it('Sample tests', () => {
    expect(solution([1, 2, 3])).deep.equal({
      numSwaps: 0,
      firstElement: 1,
      lastElement: 3,
    });
    expect(solution([3, 2, 1])).deep.equal({
      numSwaps: 3,
      firstElement: 1,
      lastElement: 3,
    });
    expect(solution([4, 2, 3, 1])).deep.equal({
      numSwaps: 5,
      firstElement: 1,
      lastElement: 4,
    });
  });
});
