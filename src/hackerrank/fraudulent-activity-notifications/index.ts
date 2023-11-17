// https://www.hackerrank.com/challenges/fraudulent-activity-notifications

const MAX_EXPENDITURE_VALUE = 201; // 0 <= expenditure[i] <= 200

// time: O(n), space: O(1)
export const fraudulentActivityNotifications = (
  expenditure: number[],
  trailingDays: number
): number => {
  let noticesSentCount = 0;
  const count = Array(MAX_EXPENDITURE_VALUE).fill(0);

  // Count the occurrences of each expenditure value within the sliding window
  for (let i = 0; i < trailingDays; i++) {
    count[expenditure[i]]++;
  }

  for (let i = trailingDays; i < expenditure.length; i++) {
    const median = findMedian(count, trailingDays);

    if (expenditure[i] >= median * 2) noticesSentCount++;

    // Update count array for the next iteration
    count[expenditure[i - trailingDays]]--;
    count[expenditure[i]]++;
  }

  return noticesSentCount;
};

// time: O(1), space: O(1)
const findMedian = (count: number[], trailingDays: number): number => {
  const isOdd = trailingDays % 2 === 1;
  let median = 0;

  if (isOdd) {
    let sum = 0;
    for (let i = 0; i < count.length; i++) {
      sum += count[i];

      if (sum > trailingDays / 2) {
        median = i;
        break;
      }
    }
  } else {
    let sum = 0;
    let left = 0;
    let right = 0;

    for (let i = 0; i < count.length; i++) {
      sum += count[i];
      if (!left && sum >= trailingDays / 2) {
        left = i;
      }
      if (sum >= trailingDays / 2 + 1) {
        right = i;
        break;
      }
    }

    median = (left + right) / 2;
  }

  return median;
};
