import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Common child', () => {
  it('Sample tests', () => {
    expect(solution('HARRY', 'SALLY')).toBe(2);
    expect(solution('SHINCHAN', 'NOHARAAA')).toBe(3);
    expect(solution('AA', 'BB')).toBe(0);
  });
});
