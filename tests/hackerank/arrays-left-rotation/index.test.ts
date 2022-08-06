import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Arrays: Left Rotation', () => {
  it('Sample tests', () => {
    expect(solution([1, 2, 3, 4, 5], 4)).deep.equal([5, 1, 2, 3, 4]);
    expect(
      solution(
        [
          41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10,
          86, 51,
        ],
        10
      )
    ).deep.equal([
      77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84,
      77,
    ]);
    expect(
      solution([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13)
    ).deep.equal([87, 97, 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60]);
  });
});
