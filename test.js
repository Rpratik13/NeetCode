function topKFrequent(nums, k) {
  const frequency = Array.from({ length: nums.length + 1 }).map(() => []);
  const count = {};

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num in count) {
    frequency[count[num]].push(parseInt(num));
  }

  const output = [];

  for (let i = frequency.length - 1; i >= 0; i--) {
    for (let num of frequency[i]) {
      output.push(num);

      if (output.length === k) {
        return output;
      }
    }
  }
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 3));
