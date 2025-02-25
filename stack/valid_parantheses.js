function validParantheses(s) {
  const stack = [];

  const paranthesesMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let p of s) {
    if (!paranthesesMap[p]) {
      stack.push(p);

      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    const lastItem = stack.pop();

    if (lastItem !== paranthesesMap[p]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(validParantheses('())'));
