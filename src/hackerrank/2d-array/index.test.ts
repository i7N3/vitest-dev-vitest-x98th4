import { describe, it, expect } from 'vitest';
import { twoDimArray } from '.';

describe('2D Array - DS', () => {
  it('should calculate the maximum hourglass sum in a basic 6x6 array', () => {
    expect(
      twoDimArray([
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0],
      ])
    ).toBe(19);
  });

  it('should handle negative and high positive values within the array', () => {
    expect(
      twoDimArray([
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 9, 2, -4, -4, 0],
        [0, 0, 0, -2, 0, 0],
        [0, 0, -1, -2, -4, 0],
      ])
    ).toBe(13);
  });

  it('should work correctly with an array containing all negative values except the hourglass', () => {
    expect(
      twoDimArray([
        [-9, -9, -9, 1, 1, 1],
        [0, -9, 0, 4, 3, 2],
        [-9, -9, -9, 1, 2, 3],
        [0, 0, 8, 6, 6, 0],
        [0, 0, 0, -2, 0, 0],
        [0, 0, 1, 2, 4, 0],
      ])
    ).toBe(28);
  });
});
