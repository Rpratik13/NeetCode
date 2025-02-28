function findMedianOfSortedArrays(nums1, nums2) {
  let A = nums1;
  let B = nums2;

  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);

  if (B.length < A.length) {
    [A, B] = [B, A];
  }

  let left = 0;
  let right = A.length - 1;

  while (true) {
    const i = Math.floor((left + right) / 2);
    const j = half - i - 2;

    const aLeft = i >= 0 ? A[i] : -Infinity;
    const aRight = i + 1 < A.length ? A[i + 1] : Infinity;
    const bLeft = j >= 0 ? B[j] : -Infinity;
    const bRight = j + 1 >= 0 ? B[j + 1] : Infinity;

    if (aLeft <= bRight && bLeft <= aRight) {
      if (total % 2 === 0) {
        return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
      }

      return Math.min(aRight, bRight);
    } else if (aLeft > bRight) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
}

console.log(findMedianOfSortedArrays([1, 3], [2]));
