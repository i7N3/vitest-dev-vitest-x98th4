import { describe, it, expect } from 'vitest';
import { jumpingOnTheClouds } from '.';

describe('Jumping on the Clouds', () => {
  it('should return 4 for the first cloud sequence', () => {
    expect(jumpingOnTheClouds([0, 0, 1, 0, 0, 1, 0])).toBe(4);
  });

  it('should return 3 for the second cloud sequence', () => {
    expect(jumpingOnTheClouds([0, 0, 0, 1, 0, 0])).toBe(3);
  });

  it('should return 6 for the third cloud sequence', () => {
    expect(jumpingOnTheClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0])).toBe(6);
  });
});
