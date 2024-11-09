class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(value) {
    const node = new Node(value);
    this.root = node;
  }

  insert(value) {
    const node = new Node(value);
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value > value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = node;
          return;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = node;
          return;
        }
      }
    }
  }

  // search value in the BST
  search(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}

const bst = new BST(1);
bst.insert(2);
bst.insert(3);
bst.insert(0);
console.log(bst.root);
console.log(bst.search(1));
