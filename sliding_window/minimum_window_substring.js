function minWindowC(s, t) {
  if (s.length < t.length) {
    return '';
  }

  const tMap = {};
  const sMap = {};

  let length = Infinity;
  let output = '';

  for (let char of t) {
    tMap[char] = (tMap[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
  }

  let left = 0;
  let right = t.length;

  while (right <= s.length) {
    const matches = Object.keys(tMap).every((key) => tMap[key] <= sMap[key]);

    if (matches) {
      if (right - left < length) {
        length = right - left;
        output = s.substring(left, right);
      }

      sMap[s[left]]--;

      left++;
    } else {
      sMap[s[right]] = (sMap[s[right]] || 0) + 1;
      right++;
    }
  }

  return output;
}

// let s = 'OUZODYXAZV',
//   t = 'XYZ';

let s = 'ab',
  t = 'a';

// let s = 'ADOBECODEBANC';
// t = 'ABC';

console.log(minWindowC(s, t));
