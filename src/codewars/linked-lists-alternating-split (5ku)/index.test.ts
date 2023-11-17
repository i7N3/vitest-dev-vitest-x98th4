import { describe, it, expect, assert } from 'vitest';
import { linkedListsAlternatingSplitRecursively, buildList, Node } from '.';

describe('tests for alternate splitting of a linked list', () => {
  it('should throw an error when splitting a null list', () => {
    expect(() => linkedListsAlternatingSplitRecursively(null)).toThrowError(
      "Can't process list with head == null"
    );
  });

  it('should throw an error when splitting a single node list', () => {
    expect(() =>
      linkedListsAlternatingSplitRecursively(new Node(23))
    ).toThrowError("Can't process list with length == 1");
  });

  it('should correctly split a list of length 2 into two separate lists', () => {
    const result = linkedListsAlternatingSplitRecursively(buildList([1, 2]));
    assert.equal(
      result.first!.data,
      1,
      'First index of first linked list should have value of 1.'
    );
    assert.equal(
      result.first!.next,
      null,
      'Second index of first linked list should be null.'
    );
    assert.equal(
      result.second!.data,
      2,
      'First index of second linked list should have value of 2.'
    );
    assert.equal(
      result.second!.next,
      null,
      'Second index of second linked list should be null.'
    );
  });

  it('should correctly split a list of length 3 into two separate lists', () => {
    const result = linkedListsAlternatingSplitRecursively(buildList([1, 2, 3]));
    assert.equal(
      result.first!.data,
      1,
      'First index of first linked list should have value of 1.'
    );
    assert.equal(
      result.first!.next!.data,
      3,
      'Second index of first linked list should have value 3.'
    );
    assert.equal(
      result.first!.next!.next,
      null,
      'Third index of first linked list should be null.'
    );
    assert.equal(
      result.second!.data,
      2,
      'First index of second linked list should have value of 2.'
    );
    assert.equal(
      result.second!.next,
      null,
      'Second index of second linked list should be null.'
    );
  });

  it('should correctly split a list of length 6 into two separate lists', () => {
    const result = linkedListsAlternatingSplitRecursively(
      buildList([1, 2, 3, 4, 5, 6])
    );
    assert.deepEqual(
      result.first,
      buildList([1, 3, 5]),
      'First list should be 1 -> 3 -> 5 -> null'
    );
    assert.deepEqual(
      result.second,
      buildList([2, 4, 6]),
      'Second list should be 2 -> 4 -> 6 -> null'
    );
  });

  it('should correctly split a list of length 11 into two separate lists', () => {
    const result = linkedListsAlternatingSplitRecursively(
      buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    );
    assert.deepEqual(
      result.first,
      buildList([1, 3, 5, 7, 9, 11]),
      'First list should be 1 -> 3 -> 5 -> 7 -> 9 -> 11 -> null'
    );
    assert.deepEqual(
      result.second,
      buildList([2, 4, 6, 8, 10]),
      'Second list should be 2 -> 4 -> 6 -> 8 -> 10 -> null'
    );
  });

  it('should correctly split a large unordered list into two separate lists', () => {
    const result = linkedListsAlternatingSplitRecursively(
      buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])
    );
    assert.deepEqual(
      result.first,
      buildList([5, 1, 3, 3, 8, 4]),
      'First list should be 5 -> 1 -> 3 -> 3 -> 8 -> 4 -> null'
    );
    assert.deepEqual(
      result.second,
      buildList([6, 2, 3, 4, 5, 1]),
      'Second list should be 6 -> 2 -> 3 -> 4 -> 5 -> 1 -> null'
    );
  });
});
