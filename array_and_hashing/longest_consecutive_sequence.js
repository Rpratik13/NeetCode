function longestConsecutiveSequence(nums) {
  const numsSet = new Set(nums);

  let output = 0;

  for (let num of numsSet) {
    if (numsSet.has(num - 1)) {
      continue;
    }

    let length = 1;

    while (numsSet.has(num + length)) {
      length++;
    }

    output = Math.max(output, length);
  }

  return output;
}

console.log(longestConsecutiveSequence([100, 2, 3, 200, 1])); // 3
