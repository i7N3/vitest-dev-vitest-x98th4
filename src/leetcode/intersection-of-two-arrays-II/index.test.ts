import { describe, expect, it } from 'vitest';
import { intersectionOfTwoArraysII } from '.';

describe('Intersection of Two Arrays II', () => {
  it('should find intersection with duplicate elements in one array', () => {
    expect(intersectionOfTwoArraysII([3, 1, 2], [1, 1])).deep.equal([1]);
  });

  it('should handle single element intersection', () => {
    expect(intersectionOfTwoArraysII([1, 2, 2, 1], [2])).deep.equal([2]);
  });

  it('should find intersection with duplicates in both arrays', () => {
    expect(intersectionOfTwoArraysII([1, 2, 2, 1], [2, 2])).deep.equal([2, 2]);
  });

  it('should find intersection with non-sequential elements', () => {
    expect(intersectionOfTwoArraysII([4, 9, 5], [9, 4, 9, 8, 4])).deep.equal([
      4, 9,
    ]);
  });

  it('should handle larger arrays with non-sequential elements', () => {
    expect(
      intersectionOfTwoArraysII(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [2, 4, 6, 8, 10, 12, 14, 16, 20]
      )
    ).deep.equal([2, 4, 6, 8, 10]);
  });
});
