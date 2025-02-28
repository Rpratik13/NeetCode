class TimeMap {
  constructor() {
    this.keyStore = new Map();
  }

  set(key, value, timestamp) {
    if (!this.keyStore.has(key)) {
      this.keyStore.set(key, [[value, timestamp]]);
    } else {
      this.keyStore.get(key).push([value, timestamp]);
    }
  }

  get(key, timestamp) {
    const map = this.keyStore.get(key);

    let l = 0;
    let r = map.length - 1;

    let output = '';

    while (l <= r) {
      const m = Math.floor((l + r) / 2);

      if (timestamp >= map[m][1]) {
        output = map[m][0];
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    return output;
  }
}

const timeMap = new TimeMap();

timeMap.set('foo', 'bar', 1);
timeMap.set('foo', 'bar2', 2);
console.log(timeMap.get('foo', 4));
