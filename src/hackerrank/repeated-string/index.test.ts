import { describe, it, expect } from 'vitest';
import { repeatedString } from '.';

describe('Repeated String', () => {
  it('should return 1 for string "a" and repetition 1', () => {
    expect(repeatedString('a', 1)).toBe(1);
  });

  it('should return 3 for string "bba" and repetition 10', () => {
    expect(repeatedString('bba', 10)).toBe(3);
  });

  it('should return 0 for string "bbb" and repetition 10', () => {
    expect(repeatedString('bbb', 10)).toBe(0);
  });

  it('should return 7 for string "aba" and repetition 10', () => {
    expect(repeatedString('aba', 10)).toBe(7);
  });

  it('should return 4 for string "abcac" and repetition 10', () => {
    expect(repeatedString('abcac', 10)).toBe(4);
  });

  it('should return 1000000000000 for string "a" and repetition 1000000000000', () => {
    expect(repeatedString('a', 1000000000000)).toBe(1000000000000);
  });
});
