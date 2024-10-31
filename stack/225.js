// 225. Implement Stack using Queues

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add an element to the back of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Remove an element from the front of the queue
  dequeue() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return value;
  }
}

class MyStack {
  constructor() {
    this.queue1 = new MyQueue();
    this.queue2 = new MyQueue();
  }

  // Push an element onto the stack
  push(value) {
    return this.queue1.enqueue(value);
  }

  // Removes the element on the top of the stack and returns it.
  pop() {
    if (this.queue1.length === 0) return -1;
    let q1Count = this.queue1.length - 1;

    while (q1Count) {
      const value = this.queue1.dequeue();
      this.queue2.enqueue(value);
      q1Count--;
    }

    let q2Count = this.queue2.length;
    while (q2Count) {
      console.log(q2Count);
      const value = this.queue2.dequeue();
      this.queue1.enqueue(value);
      q2Count--;
    }

    return this.queue1.dequeue();
  }

  // Returns the element on the top of the stack.
  top() {
    if (this.empty()) return null;
    return this.queue1.tail.value;
  }
  empty() {
    return this.queue1.length === 0;
  }
}

const myStack = new MyStack();

myStack.push(1);
myStack.push(2);
myStack.push(33);
// console.log(myStack.empty());
// console.log(myStack.top());
// console.log(myStack);
console.log(myStack.pop())
// console.log(myStack);
