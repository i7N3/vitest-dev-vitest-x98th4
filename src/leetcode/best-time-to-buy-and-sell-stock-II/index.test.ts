import { describe, it, expect } from 'vitest';
import { bestTimeToBuyAndSellStockII } from '.';

describe('Best Time to Buy and Sell Stock II', () => {
  it('should calculate the maximum profit with multiple buy/sell opportunities', () => {
    expect(bestTimeToBuyAndSellStockII([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  it('should handle increasing prices scenario', () => {
    expect(bestTimeToBuyAndSellStockII([1, 2, 3, 4, 5])).toBe(4);
  });

  it('should return 0 profit for decreasing prices scenario', () => {
    expect(bestTimeToBuyAndSellStockII([7, 6, 4, 3, 1])).toBe(0);
  });

  it('should handle a single price scenario', () => {
    expect(bestTimeToBuyAndSellStockII([7])).toBe(0);
  });
});
