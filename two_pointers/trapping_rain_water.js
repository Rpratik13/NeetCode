function trap(height) {
  let water = 0;
  let l = 0;
  let r = height.length - 1;
  let leftMax = height[l];
  let rightMax = height[r];

  while (l < r) {
    if (height[l] < height[r]) {
      l++;
      leftMax = Math.max(height[l], leftMax);
      water += leftMax - height[l];
    } else {
      r--;
      rightMax = Math.max(height[r], rightMax);
      water += rightMax - height[r];
    }
  }

  return water;
}
