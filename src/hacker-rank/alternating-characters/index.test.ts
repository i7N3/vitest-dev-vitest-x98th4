import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Alternating Characters', () => {
  it('Sample tests', () => {
    expect(solution('AAAA')).toBe(3);
    expect(solution('BBBBB')).toBe(4);
    expect(solution('ABABABAB')).toBe(0);
    expect(solution('BABABA')).toBe(0);
    expect(solution('AAABBB')).toBe(4);

    expect(solution('AAABBBAABB')).toBe(6);
    expect(solution('AABBAABB')).toBe(4);
    expect(solution('ABABABAA')).toBe(1);

    expect(solution('ABBABBAA')).toBe(3);
  });
});
