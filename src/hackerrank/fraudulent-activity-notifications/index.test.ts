import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Fraudulent Activity Notifications', () => {
  it('Sample tests', () => {
    expect(solution([10, 20, 30, 40, 50], 3)).toBe(1);
    expect(solution([1, 2, 3, 4, 4], 4)).toBe(0);
    expect(solution([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)).toBe(2);
  });
});
