// time: O(5n) -> O(n), space: O(n)
export const isPalindrome = (s: string): boolean => {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
};
