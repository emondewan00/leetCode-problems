// 1381. Design a Stack With Increment Operation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CustomStack {
  constructor(maxSize) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.maxSize = maxSize;
  }

  isEmpty() {
    return this.length === 0;
  }

  // isFull this function check stack size equal or not the max size of the stack
  isFull() {
    return this.length === this.maxSize;
  }

  // Adds x to the top of the stack if the stack has not reached the maxSize.
  push(value) {
    if (this.isFull()) return null;
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // Pops and returns the top of the stack or -1 if the stack is empty.
  pop() {
    if (this.isEmpty()) return -1;
    const removableNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const findNode = this.find(this.length - 1);
      findNode.next = null;
      this.tail = findNode;
    }
    this.length--;
    return removableNode.value;
  }

  // Find the node at a specific index
  find(index) {
    let currentNode = this.head;
    let count = index - 1;
    while (count && currentNode) {
      currentNode = currentNode.next;
      count--;
    }
    return currentNode;
  }

  // Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, increment all the elements in the stack.
  increment(k, val) {
    let count = k;
    let currentNode = this.head;
    while (count && currentNode) {
      currentNode.value += val;
      currentNode = currentNode.next;
      count--;
    }
  }
}

const csStack = new CustomStack(3);
csStack.push(1);
csStack.push(2);
csStack.push(3);
// console.log(csStack.pop());
console.log(csStack);
