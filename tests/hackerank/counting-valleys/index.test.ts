import { describe, it, expect } from 'vitest';
import { solution } from '.';

describe('Counting Valleys', () => {
  it('Sample tests', () => {
    expect(solution('UDDDUDUU')).toBe(1);
    expect(solution('DDUUDDUDUUUD')).toBe(2);
  });
});
