function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let output = right;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    let time = 0;

    for (let pile of piles) {
      time += Math.ceil(pile / middle);
    }

    if (time > h) {
      left = middle + 1;
    } else {
      right = middle - 1;
      output = Math.min(output, middle);
    }
  }

  return output;
}

console.log(minEatingSpeed([1, 4, 3, 2], 9));
