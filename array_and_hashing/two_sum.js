function twoSum(nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];

    if (numsMap.has(value)) {
      return [numsMap.get(value), i];
    }

    numsMap.set(nums[i], i);
  }
}

console.log(twoSum([3, 4, 5, 6], 9));
