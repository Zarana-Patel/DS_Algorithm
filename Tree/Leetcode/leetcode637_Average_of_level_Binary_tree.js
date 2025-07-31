class Node {
    constructor(value){
        this.value =value;
        this.left = null;
        this.right = null;
    }
}
function average_binary_tree(root){
    if(!root){
        return 0;
    }
    let queue = [root];
    let level = 0;
   
    let result = [];
    while(queue.length){
        let len = queue.length;
       
            let levelsum = 0;
        let temp =[];
        for(let i =0;i<len;i++){
            let node =queue.shift();
            levelsum =levelsum + node.value;
            
            if(node.left){
                queue.push(node.left);
               
            }
            if(node.right){
                queue.push(node.right);
            
            }  
           
    }
    result.push(levelsum/len);
        }
       
   return result;
}

 const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(15);
root.left.right = new Node(7);

console.log(average_binary_tree(root)); 
