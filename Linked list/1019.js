// 1019. Next Greater Node In Linked List

var nextLargerNodes = function (head) {
  let values = [];
  let currentNode = head;

  // Convert the linked list to an array of values
  while (currentNode) {
    values.push(currentNode.val);
    currentNode = currentNode.next;
  }

  let result = new Array(values.length).fill(0); // Initialize result array with 0s
  let stack = []; // Stack to keep track of indices

  // Traverse the values array to determine the next greater element
  for (let i = 0; i < values.length; i++) {
    while (stack.length > 0 && values[i] > values[stack[stack.length - 1]]) {
      let index = stack.pop();
      result[index] = values[i]; // Update the result for the index from the stack
    }
    stack.push(i); // Push the current index onto the stack
  }

  // Return the result array
  return result;
};
