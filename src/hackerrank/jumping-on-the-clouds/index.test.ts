import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Jumping on the Clouds', () => {
  it('Sample tests', () => {
    expect(solution([0, 0, 1, 0, 0, 1, 0])).toBe(4);
    expect(solution([0, 0, 0, 1, 0, 0])).toBe(3);
    expect(solution([0, 0, 1, 0, 0, 0, 0, 1, 0, 0])).toBe(6);
  });
});
