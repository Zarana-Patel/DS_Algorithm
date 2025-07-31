class Node {
    constructor(value){
        this.value =value;
        this.left = null;
        this.right = null;
    }
}
function depth_binary_tree(root){
    if(!root){
        return 0;
    }
    let queue = [root];
    let currentLevel = [];
    let depth = 1;
   
    while(queue.length){
        let len = queue.length;
        
        for(let i =0;i<len;i++){
            let node =queue.shift();
            currentLevel.push(node.value);
           
            if(node.left){
                queue.push(node.left);
               
            }
            if(node.right){
                queue.push(node.right);
              
            }
            if (!node.left && !node.right) {
                return depth;
            }
           
        }
        depth++;
      
    }
   
    return depth;
}

 const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.left = new Node(8);
root.right.right.right = new Node(9);

console.log(depth_binary_tree(root)); 
/*
const root = new Node(2);
root.right = new Node(3);
root.right.right = new Node(4);
root.right.right.right = new Node(5);
root.right.right.right.right = new Node(6);

console.log(depth_binary_tree(root)); */