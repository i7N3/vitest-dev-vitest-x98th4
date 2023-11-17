// https://www.hackerrank.com/challenges/frequency-queries

enum Operation {
  Insert = 1, // (1x)
  // push x to cache
  Delete = 2, // (2y)
  // delete y from cache
  Check = 3, // (3z)
  // if any int present in cache with frequency z, push 1 to result else 0
}

// time: O(n), space: O(n)
export const frequencyQueries = (input: number[][]): number[] => {
  const result: number[] = [];
  const cache = new Map<number, number>();

  for (let i = 0; i < input.length; i++) {
    const operation = input[i][0];
    const data = input[i][1];

    const valueInCache = cache.get(data) || 0;

    switch (operation) {
      case Operation.Insert:
        cache.set(data, valueInCache + 1);
        break;
      case Operation.Delete:
        if (valueInCache) cache.set(data, valueInCache - 1);
        break;
      case Operation.Check:
        let is = false;
        for (const [key, value] of cache.entries()) {
          if (value === data) {
            is = value === data;
            break;
          }
        }
        is ? result.push(1) : result.push(0);
        break;
    }
  }
  return result;
};
