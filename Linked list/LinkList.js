class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  // Add a node at the end
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Add a node at the beginning
  prePend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Print the entire list
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  // Append a node at a specific index
  appendAt(index, value) {
    if (index > this.length + 1 || index < 1) {
      return -1;
    }
    if (index === this.length + 1) {
      return this.append(value);
    } else if (index === 1) {
      return this.prePend(value);
    }

    const newNode = new Node(value);
    let prevNode = this.find(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return this;
  }

  // Find the node at a specific index
  find(index) {
    if (index > this.length || index < 1) {
      return null;
    }
    let currentNode = this.head;
    let count = 1;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  // Remove a node at a specific index
  removeAt(index) {
    if (index > this.length || index < 1) {
      return -1;
    }

    if (index === 1) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return;
    }

    const prevNode = this.find(index - 1);
    prevNode.next = prevNode.next.next;

    if (!prevNode.next) {
      this.tail = prevNode;
    }
    this.length--;
    return;
  }
}

// Usage
const list = new LinkedList(5);
list.append(10);
list.append(20);
list.append(30);
list.appendAt(2, 15); // Append 15 at index 2
list.removeAt(3); // Remove the node at index 3

// list.print(); // Output: 5, 15, 20, 30
console.log(list);
