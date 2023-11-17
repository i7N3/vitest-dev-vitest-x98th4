import { describe, expect, test } from 'vitest';
import { sortArrayOfNumbers } from '.';

describe('Sort array of numbers (7ku)', () => {
  test('should return an empty array when given an empty array', () => {
    expect(sortArrayOfNumbers([])).toEqual([]);
  });

  test('should return a sorted array when given an unsorted array', () => {
    expect(sortArrayOfNumbers([1, 2, 10, 50, 5])).toEqual([1, 2, 5, 10, 50]);
  });
});
