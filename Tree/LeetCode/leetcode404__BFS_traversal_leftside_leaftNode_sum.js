class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  function leafNode_sum_traversal(root) {
    if (!root) return 0;

  let sum = 0;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node.left) {
      // If it's a left leaf
      if (!node.left.left && !node.left.right) {
        sum += node.left.value;
      }
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return sum;
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.left = new Node(8);
console.log(leafNode_sum_traversal(root));