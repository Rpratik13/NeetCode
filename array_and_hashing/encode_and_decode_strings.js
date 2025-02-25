function encode(strs) {
  let output = '';

  for (let str of strs) {
    output += str.length + '#' + str;
  }

  return output;
}

function decode(str) {
  const output = [];

  let i = 0;

  while (i < str.length) {
    let j = i;

    while (str[j] !== '#') {
      j++;
    }

    const length = parseInt(str.substring(i, j));

    i = j + 1;
    j = i + length;

    output.push(str.substring(i, j));

    i = j;
  }

  return output;
}

console.log(encode(['hello', 'world', 'test']));
console.log(decode(encode(['hello', 'world', 'test'])));
