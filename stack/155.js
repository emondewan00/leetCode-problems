// 155. Min Stack

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x); // Push the element onto the regular stack

    // If minStack is empty or x is smaller than or equal to the current minimum, push it onto minStack
    if (
      this.minStack.length === 0 ||
      x <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(x);
    }
  }

  pop() {
    // Pop from both stack and minStack
    const popped = this.stack.pop();

    // If the popped element is the same as the current minimum, pop from minStack too
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    // Return the top element of the regular stack
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    // Return the top element of the minStack, which is the current minimum
    return this.minStack[this.minStack.length - 1];
  }
}

// Example:

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
