class Node {
    constructor(value){
        this.value = value ;
        this.left =null;
        this.right = null;
    }
}
function build_a_bst(values) {
   let root = null;
   
   for(let i =0;i<values.length;i++){
      root = insert(root,values[i]);
   }
   return root;
  }
  function insert(root,value){
    let newNode = new Node(value);
    if(root ===null){
     return newNode;
    }
    let current = root;
    let prev = null;

    while(current !== null){
       if(value === current.value){
         return root;
       }
       else if(value < current.value){
            prev = current;
           current = current.left;
       }
       else{
        prev = current;
        current = current.right;
       }
    }
   
      if (value < prev.value) {
          prev.left = newNode;
      } else {
          prev.right = newNode;
      }
       
   return root;
  }


 

let values = [10, 5, 15, 3, 7, 12, 18];
let bst = build_a_bst(values);

console.log(bst);