import { describe, expect, it } from 'vitest';
import { solution } from '.';

describe('Rotate Image', () => {
  it('Sample tests', () => {
    const input1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    solution(input1);
    expect(input1).deep.equal([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);

    const input2 = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    solution(input2);
    expect(input2).deep.equal([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });
});
