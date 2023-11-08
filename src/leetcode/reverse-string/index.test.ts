import { describe, expect, it } from 'vitest';
import { solution } from '.';

describe('Reverse String', () => {
  it('Sample tests', () => {
    let input1 = ['h', 'e', 'l', 'l', 'o'];
    solution(input1);
    expect(input1).deep.equal(['o', 'l', 'l', 'e', 'h']);

    let input2 = ['H', 'a', 'n', 'n', 'a', 'h'];
    solution(input2);
    expect(input2).deep.equal(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
