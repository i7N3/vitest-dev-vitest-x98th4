import { describe, expect, it } from 'vitest';
import { solution } from '.';

describe('Plus One', () => {
  it('Sample tests', () => {
    expect(solution([1, 2, 3])).deep.equal([1, 2, 4]);
    expect(solution([4, 3, 2, 1])).deep.equal([4, 3, 2, 2]);
    expect(solution([9])).deep.equal([1, 0]);
    expect(solution([1, 9])).deep.equal([2, 0]);
    expect(solution([9, 9])).deep.equal([1, 0, 0]);
    expect(
      solution([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
    ).deep.equal([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  });
});
