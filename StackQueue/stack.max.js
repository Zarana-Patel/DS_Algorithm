class Stack{
   constructor(){
    this.arraylist = [];
   }
   push(value){
        let maxsofar = 0;
        if(this.arraylist.length ===0){
            maxsofar = value;
        }
        else{
            maxsofar = Math.max(value,this.maxvalue());
        }
        return this.arraylist.push({value,maxsofar});
   }
   pop(){
        if(this.arraylist.length ===0) return null;
        return this.arraylist.pop();
   }
   maxvalue(){
        if(this.arraylist.length ===0) return null;
        return this.arraylist[this.arraylist.length-1].maxsofar;
   }
   print(){
    return this.arraylist;
   }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
stack.push(10);
stack.push(60);
stack.pop();
console.log(stack.maxvalue());
console.log(stack.print());