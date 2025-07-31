class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function dfs_post_order_traversal(root) {
  if(root === null) {
    return [];
  }
  const result = [];

  result.push(...dfs_post_order_traversal(root.left));
  result.push(...dfs_post_order_traversal(root.right));
  result.push(root.value);
  return result;
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(dfs_post_order_traversal(root));