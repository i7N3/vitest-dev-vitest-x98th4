import { describe, it, expect } from 'vitest';
import { countTriplets } from '.';

describe('Count Triplets 1', () => {
  it('should count valid triplets in a sequence with a common ratio of 2', () => {
    expect(countTriplets([1, 2, 2, 4], 2)).toBe(2);
  });

  it('should count valid triplets in a longer sequence with a common ratio of 3', () => {
    expect(countTriplets([1, 3, 9, 9, 27, 81], 3)).toBe(6);
  });

  it('should count valid triplets in a sequence with repeated elements and a common ratio of 5', () => {
    expect(countTriplets([1, 5, 5, 25, 125], 5)).toBe(4);
  });
});
