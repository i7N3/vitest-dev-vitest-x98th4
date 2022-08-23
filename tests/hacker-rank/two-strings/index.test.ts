import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Two string', () => {
  it('Sample tests', () => {
    expect(solution('hello', 'world')).toBe('YES');
    expect(solution('hi', 'world')).toBe('NO');
  });
});
