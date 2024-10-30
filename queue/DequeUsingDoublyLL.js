class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  // Check if the deque is empty
  isEmpty() {
    return this.length === 0;
  }

  // Append an element to the end of the deque
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.head;
  }

  // Append an element to the start of the deque
  appendLeft(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this.head;
  }

  // Remove and return the last element from the deque
  pop() {
    if (this.isEmpty()) return null;

    const lastNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return lastNode.value;
  }

  // Remove and return the first element from the deque
  popLeft() {
    if (this.isEmpty()) return null;

    const firstNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return firstNode.value;
  }

  // Clear the deque
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Find the node at a specific index (1-based index)
  find(index) {
    if (index < 1 || index > this.length) return null;

    let currentNode = this.head;
    let count = 1;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode.value;
  }

  // Display each element
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// Example usage
const deque = new Deque(11);
deque.append(1);
deque.append(2);
deque.appendLeft(0);
deque.append(3);
deque.appendLeft(-1);

console.log(deque.pop()); // 3
console.log(deque.popLeft()); // -1

console.log(deque.find(2)); // 0
deque.print(); // 0 11 1 2
