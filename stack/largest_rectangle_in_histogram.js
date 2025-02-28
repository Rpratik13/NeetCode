function largestRectangleArea(heights) {
  const stack = [];

  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let start = i;

    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      const [index, height] = stack.pop();

      maxArea = Math.max(maxArea, (i - index) * height);

      start = index;
    }

    stack.push([start, heights[i]]);
  }

  while (stack.length) {
    const [index, height] = stack.pop();

    maxArea = Math.max(maxArea, (heights.length - index) * height);
  }

  return maxArea;
}

console.log(largestRectangleArea([7, 1, 7, 2, 2, 4])); // 8
