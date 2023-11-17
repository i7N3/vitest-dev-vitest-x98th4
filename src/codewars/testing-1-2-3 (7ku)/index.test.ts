import { describe, it, expect } from 'vitest';
import { testing123 } from '.';

describe('Testing 1-2-3 (7ku)', () => {
  it('should return an empty array for an empty input array', () => {
    expect(testing123([])).toEqual([]);
  });

  it('should return an array with numbered strings for non-empty strings', () => {
    expect(testing123(['a', 'b', 'c'])).toEqual(['1: a', '2: b', '3: c']);
  });

  it('should handle an array of empty strings correctly', () => {
    expect(testing123(['', '', '', '', ''])).toEqual([
      '1: ',
      '2: ',
      '3: ',
      '4: ',
      '5: ',
    ]);
  });
});
