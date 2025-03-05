function findDuplicate(nums) {
  let slow = 0;
  let slow2 = 0;
  let fast = 0;

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  do {
    slow = nums[slow];
    slow2 = nums[slow2];
  } while (slow !== slow2);

  return slow;
}
