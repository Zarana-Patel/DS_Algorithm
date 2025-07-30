class BinaryTree_node {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function search_node_in_bst(root){
    let current = root;
    if(current === null){
        return false;
    }
      if (current.value === value){
        return true;
      }
      else if(value < current.value){
          return search_node_in_bst(current.left,value);
      }
      else{
        return search_node_in_bst(current.right,value);
      }
  };
  const root = new BinaryTree_node(2);
  root.left = new BinaryTree_node(1);
  root.right = new BinaryTree_node(5);
  root.right.left = new BinaryTree_node(4);
  root.right.right = new BinaryTree_node(6);
  
  console.log(root);
  console.log(search_node_in_bst(root));