// hackerrank.com/challenges/sherlock-and-valid-string

const ENGLISH_LOWERCASE_LETTERS = 26;
const LOWERCASE_A_CODE = 97;

// time: O(n), space: O(1)
const isValidString = (input: string): boolean => {
  const freq = Array(ENGLISH_LOWERCASE_LETTERS).fill(0);

  // count the frequency of each character
  for (let i = 0; i < input.length; i++) {
    freq[input.charCodeAt(i) - LOWERCASE_A_CODE]++;
  }

  let numDiff = 0;
  let diff = 0;

  for (let i = 0; i < freq.length; i++) {
    const current = freq[i];

    if (current === 0) {
      continue;
    }

    if (diff === 0) {
      diff = current;
    } else if (diff !== current) {
      numDiff++;

      if (numDiff > 1) {
        return false;
      }
      if (Math.abs(diff - current) > 1) {
        if (current !== 1) {
          return false;
        }
      }
    }
  }

  // all chars have the same frequency
  if (numDiff === 0) {
    return true;
  }

  // if only one char needs to be removed
  if (numDiff === 1) {
    return true;
  }

  return false;
};

export const sherlockAndTheValidString = (input: string): string => {
  return isValidString(input) ? 'YES' : 'NO';
};
