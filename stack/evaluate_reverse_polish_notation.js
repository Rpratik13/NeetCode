function evaluateRPN(tokens) {
  let output;
  const stack = [];

  const operators = ['+', '-', '/', '*'];

  for (let token of tokens) {
    if (operators.includes(token)) {
      const secondParam = parseInt(stack.pop());
      const firstParam = parseInt(stack.pop());

      switch (token) {
        case '+':
          output = firstParam + secondParam;
          break;

        case '-':
          output = firstParam - secondParam;
          break;

        case '/':
          output = parseInt(firstParam / secondParam);

          break;

        case '*':
          output = firstParam * secondParam;

          break;

        default:
          break;
      }

      stack.push(output);

      continue;
    }

    stack.push(token);
  }

  return stack.pop();
}

console.log(evaluateRPN(['1', '2', '+', '3', '*', '4', '-']));
