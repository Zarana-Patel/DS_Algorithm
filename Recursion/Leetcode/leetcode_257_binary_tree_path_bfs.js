class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function bfs(root){
    let result = [];
    let queue = [{node:root,path:root.val}];
    while(queue.length){
         let {node,path} = queue.shift();
     if(node.left){
        queue.push({node:node.left,path:`${path}->${node.left.val}`})
     }
     if(node.right){
        queue.push({node:node.right,path:`${path}->${node.right.val}`})
     }
     if(!node.right && !node.left){
        result.push(path);
    }
    }
   
   return result;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(5);

console.log(bfs(root));