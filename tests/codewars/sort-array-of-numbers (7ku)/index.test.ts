import { describe, expect, test } from 'vitest';
import { solution } from '.';

describe('Sort array of numbers (7ku)', () => {
  test('Should return an empty array', () => {
    expect(solution([])).toEqual([]);
  });
  test('Should return an array', () => {
    expect(solution([1, 2, 10, 50, 5])).toEqual([1, 2, 5, 10, 50]);
  });
});
