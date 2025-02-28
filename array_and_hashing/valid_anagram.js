function isAnagram(s, t) {
  const charCounter = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    charCounter[s[i]] = (charCounter[s[i]] || 0) + 1;
    charCounter[t[i]] = (charCounter[t[i]] || 0) - 1;
  }

  return Object.values(charCounter).every((value) => value === 0);
}

console.log(isAnagram('racecar', 'carrace'));
