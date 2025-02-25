function isAnagram(s, t) {
  const charCounter = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    charCounter[sChar] = (charCounter[sChar] || 0) + 1;
    charCounter[tChar] = (charCounter[tChar] || 0) - 1;
  }

  for (let i of Object.keys(charCounter)) {
    if (charCounter[i] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram('racecar', 'carrace'));
