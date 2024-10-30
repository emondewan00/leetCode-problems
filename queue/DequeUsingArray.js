// Deque using array

class Deque {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  // Check if deque is empty
  isEmpty() {
    return this.length === 0;
  }

  // Append an element to the end of the deque
  append(value) {
    this.items.push(value);
    this.length++;
    return this.items;
  }

  // Append an element to the start of the deque
  appendLeft(value) {
    this.items.unshift(value);
    this.length++;
    return this.items;
  }

  // Remove and return the last element from the deque
  pop() {
    if (this.isEmpty()) return null;
    const removedValue = this.items.pop();
    this.length--;
    return removedValue;
  }

  // Remove and return the first element from the deque
  popLeft() {
    if (this.isEmpty()) return null;
    const removedValue = this.items.shift();
    this.length--;
    return removedValue;
  }

  // Clear the deque
  clear() {
    this.items = [];
    this.length = 0;
    return this.items;
  }

  // Find the value using index
  find(index) {
    if (this.isEmpty()) return null;
    return this.items[index];
  }
}

const deque = new Deque();
deque.append(1);
deque.append(2);
deque.appendLeft(0);
deque.append(3);
deque.appendLeft(-1);

console.log(deque.pop()); // 3
console.log(deque.popLeft()); // -1

console.log(deque.find(2)); // 0
console.log(deque.items);
