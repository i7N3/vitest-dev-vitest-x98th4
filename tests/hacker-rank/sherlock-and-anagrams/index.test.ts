import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Sherlock and Anagrams', () => {
  it('Sample tests', () => {
    expect(solution('abba')).toBe(4);
    // expect(solution('abcd')).toBe(0);
    // expect(solution('ifailuhkqq')).toBe(3);
    // expect(solution('kkkk')).toBe(10);
    // expect(solution('cdcd')).toBe(5);
  });
});
