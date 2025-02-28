function dailyTemperatures(temperatures) {
  const output = Array.from(temperatures).fill(0);

  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    if (!stack.length || stack[stack.length - 1][1] >= temperatures[i]) {
      stack.push([i, temperatures[i]]);

      continue;
    }

    while (stack.length && stack[stack.length - 1][1] < temperatures[i]) {
      const [index, temp] = stack.pop();

      output[index] = i - index;
    }

    stack.push([i, temperatures[i]]);
  }

  return output;
}

console.log(dailyTemperatures([1, 2, 3, 3]));
