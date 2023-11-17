import { describe, it, expect } from 'vitest';
import { hashTablesRansomNote } from '.';

describe('Hash Tables: Ransom Note', () => {
  it('should return 0 for arrays with different words', () => {
    expect(
      hashTablesRansomNote(
        ['two', 'times', 'three', 'is', 'not', 'four'],
        ['two', 'times', 'two', 'is', 'four']
      )
    ).toBe(0);
  });

  it('should return 0 for arrays with different lengths', () => {
    expect(
      hashTablesRansomNote(
        ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
        ['ive', 'got', 'some', 'coconuts']
      )
    ).toBe(0);
  });

  it('should return 1 for arrays with the same words but different order', () => {
    expect(
      hashTablesRansomNote(
        ['give', 'me', 'one', 'grand', 'today', 'night'],
        ['give', 'one', 'grand', 'today']
      )
    ).toBe(1);
  });
});
