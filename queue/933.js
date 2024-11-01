// 933. Number of Recent Calls

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class RecentCounter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
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

  dequeue() {
    if (this.isEmpty()) return null;
    const removedNode = this.front;
    this.front = this.front.next;
    if (this.front === null) return (this.rear = null);
    this.size--;
    return removedNode.value;
  }
  ping(t) {
    this.enqueue(t);
    let threshold = t - 3000;
    while (this.front && this.front.value < threshold) {
      this.dequeue();
    }
    return this.size;
  }
}

const recentCounter = new RecentCounter();

recentCounter.ping(1);
recentCounter.ping(100);
recentCounter.ping(3001);
recentCounter.ping(3102);
recentCounter.ping(6100);
