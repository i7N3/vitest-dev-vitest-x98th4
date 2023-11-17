import { describe, it, expect } from 'vitest';
import { twoStrings } from '.';

describe('Two string', () => {
  it('should return "YES" for strings "hello" and "world"', () => {
    expect(twoStrings('hello', 'world')).toBe('YES');
  });

  it('should return "NO" for strings "hi" and "world"', () => {
    expect(twoStrings('hi', 'world')).toBe('NO');
  });
});
