// 232. Implement Queue using Stacks

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class MyStack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  pop() {
    if (this.isEmpty()) return null;
    const removableNode = this.tail;
    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.head = this.tail = null;
    }
    this.size--;
    return removableNode.value;
  }
}

class MyQueue {
  constructor() {
    this.stack1 = new MyStack();
    this.stack2 = new MyStack();
  }

  push(value) {
    this.stack1.push(value);
  }
  // remove first element
  pop() {
    while (this.stack1.size) {
      const popedValue = this.stack1.pop();
      this.stack2.push(popedValue);
    }
    const removedValue = this.stack2.pop();

    while (this.stack2.size) {
      const popValue = this.stack2.pop();
      this.stack1.push(popValue);
    }
    return removedValue;
  }
  peek() {
    if (this.empty()) return -1;
    return this.stack1.head.value;
  }
  empty() {
    return this.stack1.size === 0;
  }
}

const myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);
myQueue.peek();
