import { describe, it, expect } from 'vitest';
import { specialPalindromeAgain } from '.';

describe('Special palindrome again', () => {
  it('should return 7 for string "asasd"', () => {
    expect(specialPalindromeAgain('asasd')).toBe(7);
  });

  it('should return 10 for string "abcbaba"', () => {
    expect(specialPalindromeAgain('abcbaba')).toBe(10);
  });

  it('should return 10 for string "aaaa"', () => {
    expect(specialPalindromeAgain('aaaa')).toBe(10);
  });
});
