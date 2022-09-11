// https://www.hackerrank.com/challenges/sherlock-and-anagrams/
export const solution = (s: string): number => {
  let result = 0;

  for (let chunkSize = 1; chunkSize < s.length; chunkSize++) {
    const parts: { [key: string]: number } = {}; // Map can be used instead

    for (let i = 0; i <= s.length - chunkSize; i++) {
      const key = s
        .substring(i, i + chunkSize)
        .split('')
        .sort()
        .join('');

      if (parts[key]) parts[key] = parts[key] + 1;
      else parts[key] = 1;
    }

    const entries = Object.values(parts);
    for (let value of entries) if (value > 1) result++;
  }

  return result;
};
