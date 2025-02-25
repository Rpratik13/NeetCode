function dailyTemperatures(temperatures) {
  const output = Array(temperatures.length).fill(0);

  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
      const value = stack.pop();

      output[value[1]] = i - value[1];
    }

    stack.push([temperatures[i], i]);
  }

  return output;
}

console.log(dailyTemperatures([1, 2, 3, 4]));
