function search(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    }

    if (nums[l] <= nums[m]) {
      if (target > nums[m] || target < nums[l]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      if (target < nums[m] || target > nums[r]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }

  return -1;
}
