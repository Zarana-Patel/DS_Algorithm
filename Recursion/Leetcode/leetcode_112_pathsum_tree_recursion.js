class Node {
    constructor(val){
        this.val= val;
        this.left = null;
        this.right = null;
    }
}
function pathsum(root,targetsum){
    let pathsum = false;
    if(root ===null){
        return false;
    }        
    function helper(node,currentSum){
        if(!node && currentSum) return ;
        currentSum = currentSum+node.val;
        if(currentSum === targetsum){
             pathsum = true;
             return;
        }
        
        helper(node.left,currentSum);
        helper(node.right,currentSum);
    }
    helper(root,0);
    return pathsum;
}
const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(pathsum(root,15));