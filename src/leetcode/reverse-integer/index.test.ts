import { describe, expect, it } from 'vitest';
import { reverseInteger } from '.';

describe('Reverse Integer', () => {
  it('should reverse a positive integer', () => {
    expect(reverseInteger(123)).equal(321);
  });

  it('should reverse a negative integer', () => {
    expect(reverseInteger(-123)).equal(-321);
  });

  it('should handle trailing zeros', () => {
    expect(reverseInteger(120)).equal(21);
  });

  it('should return 0 for integers beyond 32-bit range', () => {
    expect(reverseInteger(1534236469)).equal(0);
  });
});
