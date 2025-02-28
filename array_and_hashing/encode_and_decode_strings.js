function encode(strs) {
  let output = '';

  for (let str of strs) {
    output += str.length + '#' + str;
  }

  return output;
}

function decode(str) {
  let i = 0;
  let j = 0;

  const output = [];

  while (i < str.length) {
    while (str[j] !== '#') {
      j++;
    }

    const length = parseInt(str.substring(i, j));
    const word = str.substring(j + 1, j + 1 + length);

    output.push(word);

    i = j + 1 + length;
    j = i;
  }

  return output;
}

console.log(encode(['hello', 'world', 'test']));
console.log(decode(encode(['hello', 'world', 'test'])));
