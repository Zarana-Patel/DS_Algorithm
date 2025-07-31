class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function dfs_pre_order_traversal(root) {
  if(root === null) {
    return [];
  }
  const result = [];
  result.push(root.value);
  
  result.push(...dfs_pre_order_traversal(root.left));
  result.push(...dfs_pre_order_traversal(root.right));
  return result;
}


const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
const grandchild1 = new Node(5);
const grandchild2 = new Node(6);

root.children.push(child1, child2, child3);
child1.children.push(grandchild1, grandchild2);

console.log(level_order_traversal(root));