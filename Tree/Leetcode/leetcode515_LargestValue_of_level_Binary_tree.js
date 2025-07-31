class Node {
    constructor(value){
        this.value =value;
        this.left = null;
        this.right = null;
    }
}
function maxValue_level_binary_tree(root){
    if(!root){
        return 0;
    }
    let queue = [root];
    let result = [];
    let temp = [];
    while(queue.length){
        let len = queue.length;
        for(let i =0;i<len;i++){
            let node =queue.shift();
                temp.push((node.value));

            if(node.left){
                queue.push(node.left);   
            }
            if(node.right){
                queue.push(node.right);
            }       
            
        }
        result.push( Math.max(...temp));
       
    }
       
   return result;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(maxValue_level_binary_tree(root));