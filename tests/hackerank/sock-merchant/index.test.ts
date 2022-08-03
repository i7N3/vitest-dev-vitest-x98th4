import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Sock merchant', () => {
  it('Sample tests', () => {
    expect(solution([10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
    expect(solution([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toBe(4);
  });
});
