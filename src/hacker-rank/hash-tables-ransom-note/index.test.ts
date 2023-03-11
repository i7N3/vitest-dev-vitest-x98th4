import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Hash Tables: Ransom Note', () => {
  it('Sample tests', () => {
    expect(
      solution(
        ['two', 'times', 'three', 'is', 'not', 'four'],
        ['two', 'times', 'two', 'is', 'four']
      )
    ).toBe(0);
    expect(
      solution(
        ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
        ['ive', 'got', 'some', 'coconuts']
      )
    ).toBe(0);
    expect(
      solution(
        ['give', 'me', 'one', 'grand', 'today', 'night'],
        ['give', 'one', 'grand', 'today']
      )
    ).toBe(1);
  });
});
