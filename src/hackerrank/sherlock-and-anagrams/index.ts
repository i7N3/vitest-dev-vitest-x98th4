// https://www.hackerrank.com/challenges/sherlock-and-anagrams/
export const solution = (s: string): number => {
  let strs = [];

  for (let chunkSize = 1; chunkSize < s.length; chunkSize++) {
    let temp = [];

    for (let i = 0; i <= s.length - chunkSize; i++) {
      temp.push(s.substr(i, chunkSize).split('').sort().join(''));
    }

    temp = temp.map(matches);
    strs.push(temp.reduce(sum));
  }

  return strs.reduce(sum);
};

const sum = (acc: number, next: number) => acc + next;

const matches = (val: string, i: number, arr: string[]) => {
  let count = 0;
  for (++i; i < arr.length; i++) {
    if (val == arr[i]) count++;
  }
  return count;
};
