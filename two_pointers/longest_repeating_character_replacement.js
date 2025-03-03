function characterReplacement(s, k) {
  let left = 0;
  let right = 0;
  let maxFreq = 1;

  const frequency = {
    [s[right]]: 1,
  };

  let output = 0;

  while (right < s.length) {
    const length = right + 1 - left;

    if (length - maxFreq <= k) {
      right++;
      output = Math.max(output, length);

      if (right < s.length) {
        frequency[s[right]] = (frequency[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, frequency[s[right]]);
      }
    } else {
      frequency[s[left]] = frequency[s[left]] - 1;
      left++;
    }
  }

  return output;
}

console.log(characterReplacement('AAABABB', 1));
