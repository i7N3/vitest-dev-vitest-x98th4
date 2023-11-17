import { describe, expect, it } from 'vitest';
import { rotateImage } from '.';

describe('Rotate Image', () => {
  it('should rotate a 3x3 matrix 90 degrees clockwise', () => {
    const input1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotateImage(input1);
    expect(input1).deep.equal([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it('should rotate a 4x4 matrix 90 degrees clockwise', () => {
    const input2 = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    rotateImage(input2);
    expect(input2).deep.equal([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });
});
