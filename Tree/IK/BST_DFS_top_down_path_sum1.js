class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function dfs_pre_order_traversal(root, target) {
    if (root === null) {
      return false;
    }
  
    let pathSumFlag = false;
  
    function helper(node, currentSum) {
      if (!node || pathSumFlag) return; // stop if null or already found
  
      currentSum += node.value;
  
      if (currentSum === target) {
        pathSumFlag = true;
        return;
      }
  
      helper(node.left, currentSum);
      helper(node.right, currentSum);
    }
  
    helper(root, 0);
  
    return pathSumFlag;
  }
  const root = new Node(5);
root.left = new Node(3);
root.right = new Node(8);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right.right = new Node(2);

console.log(dfs_pre_order_traversal(root, 8)); 
console.log(dfs_pre_order_traversal(root, 15));