import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Repeated String', () => {
  it('Sample tests', () => {
    expect(solution('a', 1)).toBe(1);
    expect(solution('bba', 10)).toBe(3);
    expect(solution('bbb', 10)).toBe(0);
    expect(solution('aba', 10)).toBe(7);
    expect(solution('abcac', 10)).toBe(4);
    expect(solution('a', 1000000000000)).toBe(1000000000000);
  });
});
