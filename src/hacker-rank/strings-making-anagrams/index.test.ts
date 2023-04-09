import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Strings: Making Anagrams', () => {
  it('Sample tests', () => {
    expect(solution('cde', 'abc')).toBe(4);
    expect(solution('showman', 'woman')).toBe(2);
    expect(
      solution('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')
    ).toBe(30);
  });
});
