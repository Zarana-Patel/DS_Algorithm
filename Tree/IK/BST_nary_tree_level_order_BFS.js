class Node{
  constructor(value){
    this.value = value;
    this.children = [];
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
      for (let child of node.children) {
        queue.push(child);
      }
    }
    result.push(temp);
  }
 
  
return result;
}


let root = new Node(1);
let child1 = new Node(2);
let child2 = new Node(3);
let child3 = new Node(4);
root.children.push(child1, child2, child3);
child1.children.push(new Node(5), new Node(6));


console.log(level_order_travesal(root));