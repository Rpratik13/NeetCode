function carFleet(target, position, speed) {
  const sortedCars = position
    .map((p, i) => [p, speed[i]])
    .sort((a, b) => b[0] - a[0]);

  let prevTime = (target - sortedCars[0][0]) / sortedCars[0][1];

  let fleet = 1;

  for (let i = 1; i < sortedCars.length; i++) {
    const currentTime = (target - sortedCars[i][0]) / sortedCars[i][1];

    if (currentTime > prevTime) {
      fleet++;
      prevTime = currentTime;
    }
  }

  return fleet;
}
