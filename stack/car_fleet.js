function carFleet(target, position, speed) {
  const sortedPosition = position
    .map((p, i) => [p, speed[i]])
    .sort((a, b) => b[0] - a[0]);

  let fleet = 1;
  let prevTime = (target - sortedPosition[0][0]) / sortedPosition[0][1];

  for (let i = 1; i < sortedPosition.length; i++) {
    const currentTime = (target - sortedPosition[i][0]) / sortedPosition[i][1];

    if (currentTime > prevTime) {
      fleet++;
      prevTime = currentTime;
    }
  }

  return fleet;
}

console.log(carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1])); // 3
