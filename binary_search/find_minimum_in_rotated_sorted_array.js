function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    min = Math.min(min, nums[middle]);

    if (nums[middle] >= nums[left]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return min;
}

console.log(findMin([3, 4, 5, 6, 2]));
