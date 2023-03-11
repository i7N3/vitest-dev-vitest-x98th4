import { describe, it, expect, assert } from 'vitest';
import { solution, buildList, Node } from '.';

describe('tests for alternate splitting of of a linked list.', () => {
  it('should be able to handle an empty list.', () => {
    expect(
      () => solution(null),
      'splitting a null list should throw an error.'
    ).toThrowError();
  });

  it('should be able to handle a list of length 1.', () => {
    expect(
      () => solution(new Node(23)),
      'splitting a single node list should throw an error.'
    ).toThrowError();
  });

  it('should be able to handle a list of length 2.', () => {
    assert.equal(
      solution(buildList([1, 2])).first!.data,
      1,
      'First index of first linked list should have value of 1.'
    );
    assert.equal(
      solution(buildList([1, 2])).first!.next,
      null,
      'Second index of first linked list should be null.'
    );
    assert.equal(
      solution(buildList([1, 2])).second!.data,
      2,
      'First index of second linked list should have value of 2.'
    );
    assert.equal(
      solution(buildList([1, 2])).second!.next,
      null,
      'Second index of second linked list should be null.'
    );
  });

  it('should be able to handle a list of length 3.', () => {
    assert.equal(
      solution(buildList([1, 2, 3])).first!.data,
      1,
      'First index of first linked list should have value of 1.'
    );
    assert.equal(
      solution(buildList([1, 2, 3])).first!.next!.data,
      3,
      'Second index of first linked list should have value 3.'
    );
    assert.equal(
      solution(buildList([1, 2, 3])).first!.next!.next,
      null,
      'Third index of first linked list should be null.'
    );
    assert.equal(
      solution(buildList([1, 2, 3])).second!.data,
      2,
      'First index of second linked list should have value of 2.'
    );
    assert.equal(
      solution(buildList([1, 2, 3])).second!.next,
      null,
      'Second index of second linked list should be null.'
    );
  });

  it('should be able to handle a list of length 6.', () => {
    assert.deepEqual(
      solution(buildList([1, 2, 3, 4, 5, 6])).first,
      buildList([1, 3, 5]),
      'First list of solution(1 -> 2 -> ... 6 -> null) should be 1 -> 3 -> 5 -> null'
    );
    assert.deepEqual(
      solution(buildList([1, 2, 3, 4, 5, 6])).second,
      buildList([2, 4, 6]),
      'Second list of solution(1 -> 2 -> ... 6 -> null) should be 2 -> 4 -> 6 -> null'
    );
    assert.equal(
      solution(buildList([1, 2, 3, 4, 5, 6])).first!.next!.next!.next,
      null,
      'Fourth index of first linked list should be null.'
    );
    assert.equal(
      solution(buildList([1, 2, 3, 4, 5, 6])).second!.next!.next!.next,
      null,
      'Fourth index of second linked list should be null.'
    );
  });

  it('should be able to handle a list of length 11.', () => {
    assert.deepEqual(
      solution(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).first,
      buildList([1, 3, 5, 7, 9, 11]),
      'First list of solution(1 -> 2 -> ... 11 -> null) should be 1 -> 3 -> 5 -> 7 -> 9 -> 11 -> null'
    );
    assert.deepEqual(
      solution(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).second,
      buildList([2, 4, 6, 8, 10]),
      'Second list of alternatingSplit(1 -> 2 -> ... 11 -> null) should be 2 -> 4 -> 6 -> 8 -> 10 -> null'
    );
    assert.equal(
      solution(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).first!.next!
        .next!.next!.next!.next!.next,
      null,
      'Seventh index of first linked list should be null.'
    );
    assert.equal(
      solution(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).second!.next!
        .next!.next!.next!.next,
      null,
      'Sixth index of second linked list should be null.'
    );
  });

  it('should be able to handle are large unordered list.', () => {
    assert.deepEqual(
      solution(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).first,
      buildList([5, 1, 3, 3, 8, 4]),
      'First list of solution(5 -> 6 -> 1 -> 2 -> 3 -> 3 -> 3 -> 4 -> 8 -> 5 -> 4 -> 1 -> null) should be 5 -> 1 -> 3 -> 3 -> 8 -> 4 -> null'
    );
    assert.deepEqual(
      solution(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).second,
      buildList([6, 2, 3, 4, 5, 1]),
      'Second list of solution(5 -> 6 -> 1 -> 2 -> 3 -> 3 -> 3 -> 4 -> 8 -> 5 -> 4 -> 1 -> null) should be 6 -> 2 -> 3 -> 4 -> 5 -> -> 1 -> null'
    );
    assert.equal(
      solution(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).first!.next!
        .next!.next!.next!.next!.next,
      null,
      'Seventh index of first linked list should be null.'
    );
    assert.equal(
      solution(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).second!.next!
        .next!.next!.next!.next!.next,
      null,
      'Seventh index of second linked list should be null.'
    );
  });
});
