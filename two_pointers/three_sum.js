function threeSum(nums) {
  const sortedNums = nums.sort((a, b) => a - b);

  const output = [];

  let prev;

  for (let i = 0; i < nums.length; i++) {
    if (sortedNums[i] === prev) {
      continue;
    }

    prev = sortedNums[i];

    const target = -sortedNums[i];
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      if (sortedNums[l] + sortedNums[r] < target) {
        l++;
      } else if (sortedNums[l] + sortedNums[r] > target) {
        r--;
      } else if (sortedNums[l] + sortedNums[r] === target) {
        output.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
        l++;
        r--;

        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }

  return output;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
