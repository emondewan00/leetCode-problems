// Doubly linked

class Node {
  constructor(value, prev = null) {
    this.value = value;
    this.next = null;
    this.prev = prev;
  }
}

class List {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
  }

  appendAt(index, value) {
    if (index < 1 || index > this.length + 1) return null;

    if (index === 1) {
      this.prepend(value);
      return;
    }
    if (index === this.length + 1) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    const findNode = this.find(index);

    newNode.next = findNode;
    newNode.prev = findNode.prev;
    findNode.prev.next = newNode;
    findNode.prev = newNode;
    this.length++;
  }

  removeAt(index) {
    if (index < 1 || index > this.length) return null;

    const nodeToRemove = this.find(index);

    if (nodeToRemove.prev) {
      nodeToRemove.prev.next = nodeToRemove.next;
    } else {
      this.head = nodeToRemove.next;
    }

    if (nodeToRemove.next) {
      nodeToRemove.next.prev = nodeToRemove.prev;
    } else {
      this.tail = nodeToRemove.prev;
    }

    this.length--;
  }

  find(index) {
    if (index < 1 || index > this.length) return null;

    let count = 1;
    let currentNode = this.head;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const doublyLinkedList = new List(1);

doublyLinkedList.appendAt(2, 2);
doublyLinkedList.append(2);
doublyLinkedList.append(22);
doublyLinkedList.append(5);
doublyLinkedList.removeAt(3);
doublyLinkedList.prepend(0);
doublyLinkedList.find(2);

doublyLinkedList.print(); // Output: 0, 1, 2, 5, 22
