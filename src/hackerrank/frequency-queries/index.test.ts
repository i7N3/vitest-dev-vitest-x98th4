import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Frequency Queries', () => {
  it('Sample tests', () => {
    expect(
      solution([
        [1, 1],
        [2, 2],
        [3, 2],
        [1, 1],
        [1, 1],
        [2, 1],
        [3, 2],
      ])
    ).deep.equal([0, 1]);
    expect(
      solution([
        [3, 4],
        [2, 1003],
        [1, 16],
        [3, 1],
      ])
    ).deep.equal([0, 1]);
    expect(
      solution([
        [1, 3],
        [2, 3],
        [3, 2],
        [1, 4],
        [1, 5],
        [1, 5],
        [1, 4],
        [3, 2],
        [2, 4],
        [3, 2],
      ])
    ).deep.equal([0, 1, 1]);
    expect(
      solution([
        [1, 5],
        [1, 6],
        [3, 2],
        [1, 10],
        [1, 10],
        [1, 6],
        [2, 5],
        [3, 2],
      ])
    ).deep.equal([0, 1]);
    expect(
      solution([
        [1, 3],
        [1, 38],
        [2, 1],
        [1, 16],
        [2, 1],
        [2, 2],
        [1, 64],
        [1, 84],
        [3, 1],
        [1, 100],
        [1, 10],
        [2, 2],
        [2, 1],
        [1, 67],
        [2, 2],
        [3, 1],
        [1, 99],
        [1, 32],
        [1, 58],
        [3, 2],
      ])
    ).deep.equal([1, 1, 0]);
  });
});
