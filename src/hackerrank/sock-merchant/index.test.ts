import { describe, it, expect } from 'vitest';
import { sockMerchant } from '.';

describe('Sock merchant', () => {
  it('should return 3 for the first array', () => {
    expect(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  });

  it('should return 4 for the second array', () => {
    expect(sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toBe(4);
  });
});
