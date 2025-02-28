function productExceptSelf(nums) {
  const output = Array(nums.length).fill(1);

  // Prefix
  for (let i = 1; i < nums.length; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  console.log(output);

  // Postfix
  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= postfix;
    postfix *= nums[i];
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4]));
