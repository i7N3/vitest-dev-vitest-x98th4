import { describe, expect, it } from 'vitest';
import { reverseString } from '.';

describe('Reverse String', () => {
  it('should reverse a simple lowercase string', () => {
    let input1 = ['h', 'e', 'l', 'l', 'o'];
    reverseString(input1);
    expect(input1).deep.equal(['o', 'l', 'l', 'e', 'h']);
  });

  it('should reverse a string with mixed case characters', () => {
    let input2 = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString(input2);
    expect(input2).deep.equal(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
