class Node {
  constructor(value) {
    this.value = value;
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

  traverse(data) {
    if (!data) {
      return;
    }

    console.log(data.value);
    this.traverse(data.next);
  }
}

const list = new LinkedList(10);

list.append(20);
list.append(30);
list.append(40);

list.traverse(list.head);
