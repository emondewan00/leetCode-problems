// Queue using Linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  // Enqueue: Add an element to the end of the queue
  enqueue(element) {
    const node = new Node(element);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  //Dequeue:Remove an element from the front
  dequeue() {
    if (this.isEmpty()) return null;
    const removableNode = this.front;
    this.front = removableNode.next;
    this.size--;

    // If the queue is empty after dequeue, set rear to null
    if (this.isEmpty()) this.rear = null;

    return removableNode.data;
  }

  //Peek: Return the first element of the queue
  peek() {
    if (this.isEmpty()) return null;
    return this.front.data;
  }

  // Return true if queue length is zero
  isEmpty() {
    return this.size === 0;
  }
}

// Usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.size); // 2
