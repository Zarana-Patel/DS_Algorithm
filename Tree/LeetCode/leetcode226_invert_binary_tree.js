class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  function invert_binary_tree(root){
    if(!root){
      return 0;
    }
    [root.left, root.right] = [root.right, root.left];
    invert_binary_tree(root.left);
    invert_binary_tree(root.right);
  }
  function binary_tree(root) {
   
    let queue = [root];
    let result = [];
    while(queue.length){
      let len = queue.length;
     let temp =[];
      for(let i=0;i<len;i++){
         let node = queue.shift();
          result.push(node.value);
         if(node.left){
            queue.push(node.left);
         }
         if(node.right){
          queue.push(node.right);
         }
}

}
return result;
  }
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(9);
invert_binary_tree(root);
console.log(binary_tree(root));