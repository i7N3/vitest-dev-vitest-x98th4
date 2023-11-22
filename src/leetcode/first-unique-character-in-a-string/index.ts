// time: O(n), space: O(1)
export const firstUniqueCharacterInAString = (input: string): number => {
  const frequencyMap = Array.from(input).reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Array.from(input).findIndex(char => frequencyMap[char] === 1);
};
