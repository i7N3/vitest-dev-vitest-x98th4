import { describe, it, expect } from 'vitest';
import { Player, solution } from '.';

describe('Sorting: Comparator', () => {
  it('Sample tests', () => {
    expect(
      solution([
        new Player('amy', 100),
        new Player('david', 100),
        new Player('heraldo', 50),
        new Player('aakansha', 75),
        new Player('aleksa', 150),
      ])
    ).deep.equal([
      new Player('aleksa', 150),
      new Player('amy', 100),
      new Player('david', 100),
      new Player('aakansha', 75),
      new Player('heraldo', 50),
    ]);
    expect(
      solution([
        new Player('smith', 20),
        new Player('jones', 15),
        new Player('jones', 20),
      ])
    ).deep.equal([
      new Player('jones', 20),
      new Player('smith', 20),
      new Player('jones', 15),
    ]);
    expect(
      solution([
        new Player('davis', 15),
        new Player('davis', 20),
        new Player('davis', 10),
        new Player('edgehill', 15),
      ])
    ).deep.equal([
      new Player('davis', 20),
      new Player('davis', 15),
      new Player('edgehill', 15),
      new Player('davis', 10),
    ]);
  });
});
