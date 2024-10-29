// Circular linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, initialize head and tail
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // Point to itself to make it circular
    } else {
      // Add new node at the end and make it circular
      this.tail.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    }

    this.length++;
  }

  // Add a node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, initialize head and tail
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      // Insert at the beginning and adjust tail to keep circularity
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head; // Update tail to point to new head
    }

    this.length++;
  }

  // Print all nodes in the circular linked list
  print() {
    if (!this.head) return; // If the list is empty, exit

    let currentNode = this.head;
    let firstIteration = true; // To handle the first node separately

    while (firstIteration || currentNode !== this.head) {
      firstIteration = false; // Set to false after the first loop
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // Remove a node at a specific index
  removeAt(index) {
    if (index < 1 || index > this.length) return;

    if (index === 1) {
      // Special case: remove the head
      this.head = this.head.next;
      this.tail.next = this.head; // Keep the circular reference
    } else {
      // Find the node before the one to be removed
      let prevNode = this.head;
      for (let i = 1; i < index - 1; i++) {
        prevNode = prevNode.next;
      }
      // Adjust pointers to remove the target node
      prevNode.next = prevNode.next.next;

      // Special case: if removing the tail, update the tail pointer
      if (index === this.length) {
        this.tail = prevNode;
      }
    }

    this.length--;
  }
}

// Example usage:
const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);

console.log("Circular Linked List:");
cll.print();

cll.prepend(5);
console.log("After prepending 5:");
cll.print();

cll.removeAt(2);
console.log("After removing node at index 2:");
cll.print();
