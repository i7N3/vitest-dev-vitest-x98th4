// https://www.hackerrank.com/challenges/count-triplets-1
type Cache = { [key: number]: number };

// time: O(n), space: O(n)
export const solution = (arr: number[], r: number): number => {
  if (arr.length < 3) return 0;

  const occurrences: Cache = {};
  const occurrencesWhichCanBeMiddle: Cache = {};

  let result = 0;

  let idx = arr.length - 1;

  // iterates through the array backwards
  while (idx >= 0) {
    let k1 = arr[idx];
    let k2 = k1 * r;
    let k3 = k2 * r;

    result += occurrencesWhichCanBeMiddle[k3] || 0;

    if (occurrencesWhichCanBeMiddle[k2])
      occurrencesWhichCanBeMiddle[k2] += occurrences[k2] || 0;
    else occurrencesWhichCanBeMiddle[k2] = occurrences[k2] || 0;

    if (occurrences[k1]) {
      occurrences[k1]++;
    } else {
      occurrences[k1] = 1;
    }

    idx--;
  }

  return result;
};
