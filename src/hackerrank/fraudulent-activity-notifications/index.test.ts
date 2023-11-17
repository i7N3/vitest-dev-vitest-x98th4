import { describe, it, expect } from 'vitest';
import { fraudulentActivityNotifications } from '.';

describe('Fraudulent Activity Notifications', () => {
  it('should detect a single fraudulent activity in a short expenditure array', () => {
    expect(fraudulentActivityNotifications([10, 20, 30, 40, 50], 3)).toBe(1);
  });

  it('should detect no fraudulent activities when all expenditures are close in value', () => {
    expect(fraudulentActivityNotifications([1, 2, 3, 4, 4], 4)).toBe(0);
  });

  it('should detect multiple fraudulent activities in a varied expenditure array', () => {
    expect(
      fraudulentActivityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)
    ).toBe(2);
  });
});
