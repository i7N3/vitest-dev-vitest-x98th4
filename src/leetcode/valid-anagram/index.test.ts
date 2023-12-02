import { describe, expect, it } from 'vitest';
import { isAnagram } from '.';

describe('Valid Anagram', () => {
  it('should return true for valid anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toEqual(true);
  });
  it('should return false for non-anagrams', () => {
    expect(isAnagram('a', 'ab')).toEqual(false);
  });
  it('should return false for non-anagrams', () => {
    expect(isAnagram('ab', 'a')).toEqual(false);
  });
  it('should return false for non-anagrams', () => {
    expect(isAnagram('rat', 'car')).toEqual(false);
  });
});
