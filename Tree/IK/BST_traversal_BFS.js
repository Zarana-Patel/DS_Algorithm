class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function level_order_travesal(root){
  if(!root){
    return;
  }
  let result =[];
  let queue = [root];
  while(queue.length){
    let len = queue.length;
    let temp=[];
    for(let i =0;i<len;i++){
      let node = queue.shift();
      temp.push(node.value);
      if(node.left){
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right);
      }
    }
    result.push(temp);
  }
 
  
return result;
}


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(level_order_travesal(root));