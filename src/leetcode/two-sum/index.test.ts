import { describe, expect, it } from 'vitest';
import { solution } from '.';

describe('Two sum', () => {
  it('Sample tests', () => {
    expect(solution([2, 7, 11, 15], 9)).deep.equal([0, 1]);
    expect(solution([3, 2, 4], 6)).deep.equal([1, 2]);
    expect(solution([3, 3], 6)).deep.equal([0, 1]);
    expect(solution([3, 2, 3], 6)).deep.equal([0, 2]);
  });
});
