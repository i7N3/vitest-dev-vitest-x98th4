import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Array.diff (6ku)', () => {
  it('Basic test should work', () => {
    expect(solution([], [4, 5])).to.eql([], 'a was [], b was [4,5]');
    expect(solution([3, 4], [3])).to.eql([4], 'a was [3, 4], b was [3]');
    expect(solution([1, 8, 2], [])).to.eql(
      [1, 8, 2],
      'a was [1, 8, 2], b was []'
    );
    expect(solution([1, 2, 3], [1, 2])).to.eql(
      [3],
      'a was [1, 2, 3], b was [1, 2]'
    );
  });
});
