import { describe, it, expect } from 'vitest';
import { commonChild } from '.';

describe('Common child', () => {
  it('should find the length of the common child in strings with partial overlap', () => {
    expect(commonChild('HARRY', 'SALLY')).toBe(2);
  });

  it('should find the length of the common child in longer strings with multiple common characters', () => {
    expect(commonChild('SHINCHAN', 'NOHARAAA')).toBe(3);
  });

  it('should return zero for strings with no common characters', () => {
    expect(commonChild('AA', 'BB')).toBe(0);
  });
});
