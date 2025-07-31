class BinaryTree_node {
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function search_node_in_bst(root,key){
  let current = root;
  while(current !== null){
    if (current.key === key){
      return curr;
    }
    else if(key < current.key){
      current = current.left;
    }
    else{
      current = current.right;
    }
    
  }
  return null; 
};
const root = new BinaryTree_node(2);
root.left = new BinaryTree_node(1);
root.right = new BinaryTree_node(5);
root.right.left = new BinaryTree_node(4);
root.right.right = new BinaryTree_node(6);

console.log(root);
console.log(search_node_in_bst(root,5));