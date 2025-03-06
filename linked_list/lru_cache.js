class Node {
  /**
   *
   * @param {number} key
   * @param {number} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.right = this.right;
    this.right.left = this.left;
  }

  remove(node) {
    const left = node.left;
    const right = node.right;

    left.right = right;
    right.left = left;
  }

  insert(node) {
    const left = this.right.left;
    left.right = node;
    node.left = left;
    node.right = this.right;
    this.right.left = node;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);
    this.remove(node);
    this.insert(node);

    return node.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.map.has(key)) {
      this.remove(this.map.get(key));
    }

    const node = new Node(key, value);
    this.insert(node);
    this.map.set(key, node);

    if (this.map.size > this.capacity) {
      const leastUsed = this.left.right;
      this.map.delete(leastUsed.key);
      this.remove(leastUsed);
    }
  }

  print() {
    const output = [];

    let node = this.left;

    while (node) {
      output.push([node.key, node.value]);
      node = node.right;
    }

    console.log(
      `(Left: ${this.left.key}, ${this.left.value}) (Right: ${
        this.right.key
      }, ${this.right.value}) ${output.join(', ')}`,
    );
  }
}

const lru = new LRUCache(2);
lru.put(1, 10);
lru.print();
lru.get(1);
lru.print();
lru.put(2, 20);
lru.print();
lru.put(3, 30);
lru.print();
