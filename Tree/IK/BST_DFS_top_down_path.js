class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function dfsPreOrderIterative(root) {
    if (!root) return [];
  
    const result = [];
    const stack = [root];
  
    while (stack.length > 0) {
      const current = stack.pop();
      result.push(current.value); // Visit the node
  
      // Push right first so left is processed first (LIFO)
      if (current.right) {
        stack.push(current.right);
      }
  
      if (current.left) {
        stack.push(current.left);
      }
    }
  
    return result;
  }

  const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(dfsPreOrderIterative(root)); // Output: [1, 2, 4, 5, 3]