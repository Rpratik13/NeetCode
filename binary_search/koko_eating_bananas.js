function minEatingSpeed(piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  let output = r;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    let time = 0;

    for (let p of piles) {
      time += Math.ceil(p / m);
    }

    if (time <= h) {
      output = Math.min(output, m);
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return output;
}

console.log(minEatingSpeed([1, 4, 3, 2], 9));
