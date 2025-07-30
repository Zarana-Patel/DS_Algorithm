class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function dfs_pre_order_traversal(root, target) {
  const result = [];

  function helper(node, currentSum, slate) {
    if (!node) return;

    currentSum += node.value;
    slate.push(node.value);

    if (currentSum === target) {
      result.push([...slate]); // copy the path
      slate.pop();
      return;
    }

    helper(node.left, currentSum, slate);
    helper(node.right, currentSum, slate);

    slate.pop(); // backtrack
  }

  helper(root, 0, []);

  return result;
}

const root = new Node(5);
root.left = new Node(3);
root.right = new Node(8);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right.right = new Node(2);

console.log(dfs_pre_order_traversal(root, 8)); 