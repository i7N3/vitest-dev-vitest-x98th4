// time: O(n + m), space: O(n)
export const intersectionOfTwoArraysII = (
  nums1: number[],
  nums2: number[]
): number[] => {
  const cache = new Map<number, number>();
  const isNums1GtNums2 = nums1.length > nums2.length;

  const toIter1 = isNums1GtNums2 ? nums1 : nums2;
  const toIter2 = isNums1GtNums2 ? nums2 : nums1;

  for (let i = 0; i < toIter1.length; i++) {
    const current = toIter1[i];
    const existed = cache.get(current);
    cache.set(current, existed ? existed + 1 : 1);
  }

  const intersection = [];

  for (let i = 0; i < toIter2.length; i++) {
    const current = toIter2[i];
    const existed = cache.get(current);

    if (!existed) continue;
    if (existed - 1 < 0) continue;

    cache.set(current, existed - 1);
    intersection.push(current);
  }

  return intersection;
};

// What if the given array is already sorted? How would you optimize your algorithm?
// export const intersectionOfTwoArraysII = (
//   nums1: number[],
//   nums2: number[]
// ): number[] => {
//   let i = 0,
//     j = 0;

//   const intersection = [];

//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] < nums2[j]) {
//       i++;
//     } else if (nums1[i] > nums2[j]) {
//       j++;
//     } else {
//       intersection.push(nums1[i]);
//       i++;
//       j++;
//     }
//   }

//   return intersection;
// };
