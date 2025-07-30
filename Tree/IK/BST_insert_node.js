class Node {
    constructor(key){
        this.key = key ;
        this.left =null;
        this.right = null;
    }
}
function insertNode(root,key){
   if(root === null) return new Node(key);
   let current = root;
   let prev = null;
   while(current !== null){
      
      if(key === current.key){
        return ;
      }
      else if(key< current.key){
        prev = current;
        current = current.left;
      }
      else{
        prev = current;
        current = current.right;
      }
   }
   if(key < prev.key){
       prev.left = new Node(key);
   }
   else{
    prev.right = new Node(key);
   }
   return root;
}


let root = null;
root  = insertNode(root,14);
root  = insertNode(root,24);
root  = insertNode(root,4);
root  = insertNode(root,5);
root  = insertNode(root,19);
console.log(root);
