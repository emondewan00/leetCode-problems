class Stack {
  constructor(initialValue = null) {
    this.items = initialValue !== null ? [initialValue] : [];
    this.length = this.items.length;
  }

  // Check if stack is empty
  isEmpty() {
    return this.length === 0;
  }

  // Push: Add an element to the end of the stack
  push(value) {
    this.items.push(value);
    this.length++;
    return this.items;
  }

  // Pop: Remove the top element from the stack
  pop() {
    if (this.isEmpty()) return null;
    const removedValue = this.items.pop();
    this.length--;
    return removedValue;
  }

  // Peek: Return the top element of the stack
  peek() {
    return this.isEmpty() ? null : this.items[this.length - 1];
  }

  // Display each element of the stack
  display() {
    return this.isEmpty() ? [] : [...this.items];
  }

  // Clear the stack
  clear() {
    this.items = [];
    this.length = 0;
  }
}

// Usage
const stack = new Stack();
stack.push("hello stack");
stack.push("second value");
stack.push("third value");

console.log(stack.pop());     // Pops "third value"
console.log(stack.peek());    // Shows "second value"
console.log(stack.display()); // Displays stack contents as an array
stack.clear();                // Clears the stack
console.log(stack.display()); // Displays an empty array
