import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Testing 1-2-3 (7ku)', () => {
  it('Fixed tests', () => {
    expect(solution([])).toEqual([]);
    expect(solution(['a', 'b', 'c'])).toEqual(['1: a', '2: b', '3: c']);
    expect(solution(['', '', '', '', ''])).toEqual([
      '1: ',
      '2: ',
      '3: ',
      '4: ',
      '5: ',
    ]);
  });
});
