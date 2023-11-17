// https://www.hackerrank.com/challenges/counting-valleys/

// time: O(n), space: O(1)
export const countingValleys = (route: string): number => {
  let count = 0;
  let height = 0;
  const path = route.split('') as 'U' | 'D'[];

  for (let i = 0; i < path.length; i++) {
    const step = path[i];

    if (step === 'U') {
      height++;
      if (height === 0 && i !== 0) count++;
    }

    if (step === 'D') height--;
  }

  return count;
};
