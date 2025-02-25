function groupAnagrams(strs) {
  const output = {};

  for (let str of strs) {
    const characters = new Array(26).fill(0);

    for (let c of str) {
      characters[c.charCodeAt(0) - 97] += 1;
    }

    const key = characters.join(',');

    if (!output[key]) {
      output[key] = [];
    }

    output[key].push(str);
  }

  return Object.values(output);
}

console.log(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']));
