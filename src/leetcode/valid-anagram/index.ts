// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// time: O(s + t), space: O(1)
export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const count = map.get(t[i]);
    if (!count) {
      return false;
    }
    map.set(t[i], count - 1);
  }
  return true;
};
