import { describe, it, expect } from 'vitest';
import { countingValleys } from '.';

describe('Counting Valleys', () => {
  it('should count the number of valleys in a simple hike', () => {
    expect(countingValleys('UDDDUDUU')).toBe(1);
  });

  it('should accurately count valleys in a longer hike with multiple valleys', () => {
    expect(countingValleys('DDUUDDUDUUUD')).toBe(2);
  });
});
