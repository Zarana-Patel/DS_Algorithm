class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function build_a_bst(values){
  let root = null;

  for(let i =0;i<values.length;i++){
    root = insert_node(root,values[i]);
  }
  return root;
}
function insert_node(root,value){
  let newNode = new Node(value);
  if(root === null){
    return newNode;
  }
  let current = root;
  let prev = null;

  while(current !==null){
    if(current.value === value){
       return root;
    }
    else if(value < current.value){
        prev = current;
        current = current.left;
    }
    else{
      prev = current;
      current = current.right;
    }
  }
  if( value<prev.value){
    prev.left = newNode;
  }
  else{
    prev.right = newNode;
  }
  return root;
}
function min_value(root){
  if(root === null){
    return root;
  }
  let current = root;
  while(current.left !== null){
      current = current.left;
  }
  return current.value;
}
function max_value(root){
  if( root === null){
    return root;
  } 
  let current = root;
  while(current.right !==null){
    current = current.right;
  }
  return current.value;
}
  let values = [10, 5, 15, 3, 7, 12, 18];
  let bst = build_a_bst(values);
  let minNode = min_value(bst);
  let maxNode = max_value(bst);
  console.log(maxNode);
