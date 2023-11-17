import { describe, it, expect } from 'vitest';
import { sherlockAndAnagrams } from '.';

// Sherlock and Anagrams Tests
describe('Sherlock and Anagrams', () => {
  it('should return 4 for string "abba"', () => {
    expect(sherlockAndAnagrams('abba')).toBe(4);
  });

  it('should return 0 for string "abcd"', () => {
    expect(sherlockAndAnagrams('abcd')).toBe(0);
  });

  it('should return 3 for string "ifailuhkqq"', () => {
    expect(sherlockAndAnagrams('ifailuhkqq')).toBe(3);
  });

  it('should return 10 for string "kkkk"', () => {
    expect(sherlockAndAnagrams('kkkk')).toBe(10);
  });

  it('should return 5 for string "cdcd"', () => {
    expect(sherlockAndAnagrams('cdcd')).toBe(5);
  });
});
