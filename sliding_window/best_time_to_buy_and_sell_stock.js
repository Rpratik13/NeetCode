function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let profit = 0;

  while (right < prices.length) {
    profit = Math.max(profit, prices[right] - prices[left]);

    if (prices[left] > prices[right]) {
      left = right;
      right++;
    } else {
      right++;
    }
  }

  return profit;
}

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
