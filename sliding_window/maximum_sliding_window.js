function maxSlidingWindow(nums, k) {
  const output = [];
  let l = 0;
  let r = 0;
  const queue = [];

  while (r < nums.length) {
    while (queue.length && nums[queue[queue.length - 1]] < nums[r]) {
      queue.pop();
    }

    queue.push(r);

    if (l > queue[0]) {
      queue.shift();
    }

    if (r + 1 >= k) {
      output.push(nums[queue[0]]);
      l += 1;
    }

    r += 1;
  }

  return output;
}

console.log(maxSlidingWindow([7, 2, 4], 2));
