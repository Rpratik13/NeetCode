/**
 *
 * @param {string} s1
 * @param {string} s2
 */
function checkInclusion(s1, s2) {
  let left = 0;
  let right = s1.length - 1;

  if (s2.length < s1.length) {
    return false;
  }

  const frequency = Array(26).fill(0);
  const output = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    frequency[s2[i].charCodeAt(0) - 97] += 1;
    output[s1[i].charCodeAt(0) - 97] += 1;
  }

  const outputString = output.join(',');

  while (right < s2.length) {
    if (outputString === frequency.join(',')) {
      return true;
    }

    frequency[s2[left].charCodeAt(0) - 97] -= 1;

    left++;
    right++;

    if (right < s2.length) {
      frequency[s2[right].charCodeAt(0) - 97] += 1;
    }
  }

  return false;
}

console.log(checkInclusion('abc', 'lecabee'));
