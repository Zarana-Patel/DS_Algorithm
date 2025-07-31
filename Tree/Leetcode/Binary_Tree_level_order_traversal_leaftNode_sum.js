class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  function level_order_leftNode_sum(root) {
    if(!root) {
      return [];
    }
    const result = [];
    const queue = [root];
    let sum = 0;
    while(queue.length) {
      
        const temp  = [];
        let len = queue.length;

        for(let i =0;i<len;i++){
          let node = queue.shift();
          if(!node.left && !node.right){
            sum =sum+node.value;
          }
         

          if(node.left){
            queue.push(node.left);
          }
          if(node.right){
            queue.push(node.right);
          } 
        }
    }
   return sum;
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(level_order_leftNode_sum(root));