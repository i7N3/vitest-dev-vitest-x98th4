import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Special palindrome again', () => {
  it('Sample tests', () => {
    expect(solution('asasd')).toBe(7);
    expect(solution('abcbaba')).toBe(10);
    expect(solution('aaaa')).toBe(10);
  });
});
