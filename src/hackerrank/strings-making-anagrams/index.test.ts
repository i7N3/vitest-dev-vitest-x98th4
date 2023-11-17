import { describe, it, expect } from 'vitest';
import { stringsMakingAnagrams } from '.';

describe('Strings: Making Anagrams', () => {
  it('should return 4 for strings "cde" and "abc"', () => {
    expect(stringsMakingAnagrams('cde', 'abc')).toBe(4);
  });

  it('should return 2 for strings "showman" and "woman"', () => {
    expect(stringsMakingAnagrams('showman', 'woman')).toBe(2);
  });

  it('should return 30 for long strings', () => {
    expect(
      stringsMakingAnagrams(
        'fcrxzwscanmligyxyvym',
        'jxwtrhvujlmrpdoqbisbwhmgpmeoke'
      )
    ).toBe(30);
  });
});
