function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] >= nums[left]) {
      if (nums[middle] < target || target < nums[left]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      if (nums[middle] > target || target > nums[right]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return -1;
}

console.log(search([8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7], 9));
