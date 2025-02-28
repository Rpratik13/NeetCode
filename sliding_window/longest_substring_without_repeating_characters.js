function lengthOfLongestSubstring(s) {
  let output = 0;

  let left = 0;
  let right = 0;

  let charSet = new Set();

  while (right < s.length) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    right++;

    output = Math.max(output, charSet.size);
  }

  return output;
}

console.log(lengthOfLongestSubstring('dvdf'));
