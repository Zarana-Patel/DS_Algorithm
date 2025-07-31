class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function dfs_pre_order_traversal(root) {
    if (root === null) {
        return 0;
      }
    
      let diameter = 0;
    
      function helper(treeNode) {
        if (treeNode === null) {
          return -1; 
        }
    
        let maxL = helper(treeNode.left) + 1;
        let maxR = helper(treeNode.right) + 1;
    
        let myDiameter = maxL + maxR;
        diameter = Math.max(diameter, myDiameter);
    
        return Math.max(maxL, maxR);
      }
    
      helper(root);
      return diameter;
  }
  const root = new Node(5);
root.left = new Node(3);
root.right = new Node(8);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right.right = new Node(2);

console.log(dfs_pre_order_traversal(root)); 
