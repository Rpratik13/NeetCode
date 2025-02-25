function longestConsecutiveSequence(nums) {
  const numsSet = new Set(nums);

  let longest = 0;

  for (let num of numsSet) {
    if (numsSet.has(num - 1)) {
      continue;
    }

    let length = 1;

    while (numsSet.has(num + length)) {
      length += 1;
    }

    longest = Math.max(longest, length);
  }

  return longest;
}

console.log(longestConsecutiveSequence([100, 2, 3, 200, 1]));
