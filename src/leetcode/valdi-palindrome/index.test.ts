import { describe, expect, it } from 'vitest';
import { isPalindrome } from '.';

describe('Valid Palindrome', () => {
  it('"amanaplanacanalpanama" is a palindrome.', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
  });

  it('"raceacar" is not a palindrome.', () => {
    expect(isPalindrome('race a car')).toEqual(false);
  });

  it('s is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.', () => {
    expect(isPalindrome(' ')).toEqual(true);
  });
});
