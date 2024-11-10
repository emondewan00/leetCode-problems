// 641. Design Circular Deque

class MyCircularDeque {
  constructor(k) {
    this.capacity = k;
    this.deque = new Array(k);
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }

  insertFront(value) {
    if (this.isFull()) return false;
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.deque[this.front] = value;
    this.size++;
    return true;
  }

  insertLast(value) {
    if (this.isFull()) return false;
    this.deque[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
    return true;
  }

  deleteFront() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;
  }

  deleteLast() {
    if (this.isEmpty()) return false;
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    this.size--;
    return true;
  }

  getFront() {
    if (this.isEmpty()) return -1;
    return this.deque[this.front];
  }

  getRear() {
    if (this.isEmpty()) return -1;
    return this.deque[(this.rear - 1 + this.capacity) % this.capacity];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }
}

// Example:

const circularDeque = new MyCircularDeque(3); // set the size to be 3

circularDeque.insertLast(1); // return true
circularDeque.insertLast(2); // return true
circularDeque.insertFront(3); // return true

console.log(circularDeque.getFront()); // return 3
