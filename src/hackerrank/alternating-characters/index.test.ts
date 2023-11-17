import { describe, it, expect } from 'vitest';
import { alternatingCharacters } from '.';

describe('Alternating Characters', () => {
  it('should count deletions for a string with repeating As', () => {
    expect(alternatingCharacters('AAAA')).toBe(3);
  });

  it('should count deletions for a string with repeating Bs', () => {
    expect(alternatingCharacters('BBBBB')).toBe(4);
  });

  it('should return zero for an alternating AB pattern without repeats', () => {
    expect(alternatingCharacters('ABABABAB')).toBe(0);
  });

  it('should return zero for an alternating BA pattern without repeats', () => {
    expect(alternatingCharacters('BABABA')).toBe(0);
  });

  it('should count deletions for a string with mixed A and B repeats', () => {
    expect(alternatingCharacters('AAABBB')).toBe(4);
  });

  it('should handle longer strings with mixed repeats', () => {
    expect(alternatingCharacters('AAABBBAABB')).toBe(6);
    expect(alternatingCharacters('AABBAABB')).toBe(4);
    expect(alternatingCharacters('ABABABAA')).toBe(1);
  });

  it('should count deletions for a string with non-uniform alternation', () => {
    expect(alternatingCharacters('ABBABBAA')).toBe(3);
  });
});
