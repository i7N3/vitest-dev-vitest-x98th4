import { describe, expect, it } from 'vitest';
import { firstUniqueCharacterInAString } from '.';

describe('First Unique Character in a String', () => {
  it('should return index 0', () => {
    expect(firstUniqueCharacterInAString('leetcode')).equal(0);
  });

  it('should return index 2', () => {
    expect(firstUniqueCharacterInAString('loveleetcode')).equal(2);
  });

  it('should return index -1', () => {
    expect(firstUniqueCharacterInAString('aabb')).equal(-1);
  });
});
