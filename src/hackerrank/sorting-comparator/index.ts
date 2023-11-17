// https://www.hackerrank.com/challenges/ctci-comparator-sorting

export class Player {
  name: string;
  score: number;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
}

class Checker {
  compare(p1: Player, p2: Player) {
    if (p1.score === p2.score) return p1.name.localeCompare(p2.name);
    return p2.score - p1.score;
  }
}

// time: O(n log n), space: O(1), n - length of the source
export const sortingComparator = (source: Player[]): Player[] => {
  const checker = new Checker();
  return source.sort(checker.compare);
};
