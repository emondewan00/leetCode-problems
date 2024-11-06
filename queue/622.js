// 622. Design Circular Queue

class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.size = k;
    this.front = 0;
    this.rear = -1;
    this.count = 0;
  }

  enQueue(value) {
    if (this.isFull()) return false;

    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    this.count++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;

    this.front = (this.front + 1) % this.size;
    this.count--;
    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.queue[this.rear];
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.size;
  }
}

// Example usage:

const circularQueue = new MyCircularQueue(3); // set the size to be 3

console.log(circularQueue.enQueue(1)); // return true
console.log(circularQueue.enQueue(2)); // return true
console.log(circularQueue.enQueue(3)); // return true
