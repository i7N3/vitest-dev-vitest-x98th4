import { describe, it, expect } from 'vitest';
import { Player, sortingComparator } from '.';

describe('Sorting: Comparator', () => {
  it('should return the correctly sorted array of Player objects', () => {
    const players1 = [
      new Player('amy', 100),
      new Player('david', 100),
      new Player('heraldo', 50),
      new Player('aakansha', 75),
      new Player('aleksa', 150),
    ];

    const sortedPlayers1 = [
      new Player('aleksa', 150),
      new Player('amy', 100),
      new Player('david', 100),
      new Player('aakansha', 75),
      new Player('heraldo', 50),
    ];

    const players2 = [
      new Player('smith', 20),
      new Player('jones', 15),
      new Player('jones', 20),
    ];

    const sortedPlayers2 = [
      new Player('jones', 20),
      new Player('smith', 20),
      new Player('jones', 15),
    ];

    const players3 = [
      new Player('davis', 15),
      new Player('davis', 20),
      new Player('davis', 10),
      new Player('edgehill', 15),
    ];

    const sortedPlayers3 = [
      new Player('davis', 20),
      new Player('davis', 15),
      new Player('edgehill', 15),
      new Player('davis', 10),
    ];

    expect(sortingComparator(players1)).toEqual(sortedPlayers1);
    expect(sortingComparator(players2)).toEqual(sortedPlayers2);
    expect(sortingComparator(players3)).toEqual(sortedPlayers3);
  });
});
