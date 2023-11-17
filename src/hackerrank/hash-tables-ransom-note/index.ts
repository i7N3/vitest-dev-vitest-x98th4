// https://www.hackerrank.com/challenges/ctci-ransom-note

// time: O (n * m)
export const hashTablesRansomNote = (
  magazine: string[],
  note: string[]
): number => {
  const hash: { [key: string]: number } = {};

  for (let i = 0; i < magazine.length; i++) {
    const current = magazine[i];
    hash[current] = hash[current] ? hash[current] + 1 : 1;
  }
  for (let i = 0; i < note.length; i++) {
    const current = note[i];
    if (hash[current]) hash[current]--;
    else return 0;
  }

  return 1;
};
