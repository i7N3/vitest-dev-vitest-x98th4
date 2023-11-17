import { describe, it, expect } from 'vitest';
import { arraysLeftRotation } from '.';

describe('Arrays: Left Rotation', () => {
  it('should correctly perform a left rotation of 4 on a small array', () => {
    expect(arraysLeftRotation([1, 2, 3, 4, 5], 4)).deep.equal([5, 1, 2, 3, 4]);
  });

  it('should correctly perform a left rotation of 10 on a larger array', () => {
    expect(
      arraysLeftRotation(
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
  });

  it('should correctly perform a left rotation of 13 on a medium-sized array', () => {
    expect(
      arraysLeftRotation(
        [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97],
        13
      )
    ).deep.equal([87, 97, 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60]);
  });
});
