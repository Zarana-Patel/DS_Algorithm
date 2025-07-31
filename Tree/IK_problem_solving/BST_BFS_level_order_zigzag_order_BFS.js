class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  function level_order_traversal(root) {
    if(!root) {
      return [];
    }
    const result = [];
    const queue = [root];
    let lefttoRight = true;
   
    while(queue.length) {
      
        const temp  = [];
        let len = queue.length;

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
         if (!lefttoRight) {
          temp.reverse();
        } 
         result.push(temp);
         lefttoRight = !lefttoRight;
    }
   return result;
}
const root = new Node(0);
root.left = new Node(1);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);

console.log(level_order_traversal(root));