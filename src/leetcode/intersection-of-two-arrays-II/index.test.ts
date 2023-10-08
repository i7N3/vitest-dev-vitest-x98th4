import { describe, expect, it } from 'vitest';
import { solution } from '.';

describe('Intersection of Two Arrays II', () => {
  it('Sample tests', () => {
    expect(solution([3, 1, 2], [1, 1])).deep.equal([1]);
    expect(solution([1, 2, 2, 1], [2])).deep.equal([2]);
    expect(solution([1, 2, 2, 1], [2, 2])).deep.equal([2, 2]);
    expect(solution([4, 9, 5], [9, 4, 9, 8, 4])).deep.equal([4, 9]);
    expect(
      solution(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [2, 4, 6, 8, 10, 12, 14, 16, 20]
      )
    ).deep.equal([2, 4, 6, 8, 10]);
  });
});
