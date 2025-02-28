/**
 *
 * @param {string} strs
 */
function groupAnagrams(strs) {
  const output = {};

  for (let str of strs) {
    const charCount = Array(26).fill(0);

    for (let char of str) {
      charCount[char.charCodeAt(0) - 97]++;
    }

    const key = charCount.join(',');

    if (!output[key]) {
      output[key] = [];
    }

    output[key].push(str);
  }

  return Object.values(output);
}

console.log(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']));
