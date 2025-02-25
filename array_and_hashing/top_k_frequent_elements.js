function topKFrequent(nums, k) {
  const count = {};

  const frequency = Array.from({ length: nums.length + 1 }).map(() => []);

  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }

  for (const n in count) {
    frequency[count[n]].push(parseInt(n));
  }

  const output = [];

  for (let i = frequency.length - 1; i > 0; i--) {
    for (const n of frequency[i]) {
      output.push(n);

      if (output.length === k) {
        return output;
      }
    }
  }
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
