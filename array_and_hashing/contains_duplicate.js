function hasDuplicate(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }

    set.add(num);
  }

  return false;
}

const testCases = [
  [[1, 2, 3, 3], true],
  [[1, 2, 3, 4], false],
];

for (let testCase of testCases) {
  const output = hasDuplicate(testCase[0]);
  if (output !== testCase[1]) {
    console.log('Failed: ', testCase[0], output, testCase[1]);

    break;
  } else {
    console.log('Passed');
  }
}
