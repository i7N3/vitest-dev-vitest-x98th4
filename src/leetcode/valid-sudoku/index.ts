/**
 *
 * - Each row must contain the digits 1-9 without repetition.
 * - Each column must contain the digits 1-9 without repetition.
 * - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * - Only the filled cells need to be validated according to the mentioned rules.
 *
 */

// time O(1), space O(1) -> constant because the board is always 9x9
const initCache = (): Record<number, Set<string>> => {
  const cache: Record<number, Set<string>> = {};
  for (let i = 0; i < 9; i++) {
    cache[i] = new Set<string>();
  }
  return cache;
};

export const validSudoku = (board: string[][]): boolean => {
  const cache = { rows: initCache(), cols: initCache(), boxes: initCache() };

  for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
    const row = board[rowIdx];

    for (let colIdx = 0; colIdx < 9; colIdx++) {
      const current = row[colIdx];

      if (current === '.') {
        continue;
      }

      const boxIdx = Math.floor(rowIdx / 3) * 3 + Math.floor(colIdx / 3);

      if (cache.rows[rowIdx].has(current)) {
        return false;
      }
      cache.rows[rowIdx].add(current);

      if (cache.cols[colIdx].has(current)) {
        return false;
      }
      cache.cols[colIdx].add(current);

      if (cache.boxes[boxIdx].has(current)) {
        return false;
      }
      cache.boxes[boxIdx].add(current);
    }
  }

  return true;
};
