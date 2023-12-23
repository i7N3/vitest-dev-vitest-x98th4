import { describe, expect, it } from 'vitest';
import { myAtoi } from '.';

describe('String to Integer (atoi)', () => {
  it('"42" should be 42', () => {
    expect(myAtoi('42')).equal(42);
  });
  it('"   -42" should be -42', () => {
    expect(myAtoi('   -42')).equal(-42);
  });
  it('"4193 with words" should be 4193', () => {
    expect(myAtoi('4193 with words')).equal(4193);
  });
});
