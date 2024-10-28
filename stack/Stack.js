// stack using linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.length = 1;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const node = new Node(value);
    const temp = this.head;
    node.next = temp;
    this.head = node;
    this.length++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const popNode = this.head;
    this.head = popNode.next;
    this.length--;
    popNode.next = null;
    return popNode;
  }
  peak() {
    return this.head && this.head.value;
  }

  display() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const stack = new Stack("hello stack");
stack.push("second value");
stack.push("third value");

stack.pop(); // Pops "third value"
// stack.display();
console.log(stack.peak());
console.log(stack);
