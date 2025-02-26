function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (numbers[l] + numbers[r] !== target) {
    if (numbers[l] + numbers[r] > target) {
      r--;
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    }
  }

  return [l, r];
}
