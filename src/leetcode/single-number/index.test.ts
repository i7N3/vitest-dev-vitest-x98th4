import { describe, expect, it } from 'vitest';
import { solution } from '.';

describe('Single Number', () => {
  it('Sample tests', () => {
    expect(solution([2, 2, 1])).toBe(1);
    expect(solution([4, 1, 2, 1, 2])).toBe(4);
    expect(solution([1])).toBe(1);
  });
});
