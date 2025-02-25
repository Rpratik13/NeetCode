class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      this.minStack.push(
        Math.min(this.minStack[this.minStack.length - 1], val),
      );
    }
  }

  pop() {
    this.minStack.pop();

    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
