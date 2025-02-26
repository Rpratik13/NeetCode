function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;

  let area = Math.min(heights[left], heights[right]) * (right - left);

  while (left < right) {
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }

    area = Math.max(
      area,
      Math.min(heights[left], heights[right]) * (right - left),
    );
  }

  return area;
}
