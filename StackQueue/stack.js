class Stack{
    constructor(){
        this.arraylist = [];
    }
push(value){
    this.arraylist.push(value);
}
isEmpty(){
    return this.arraylist.length ===0;
}
pop(){
    if(this.isEmpty()){
        return "stack is empty";
    }
    return this.arraylist.pop();
}
peek(){
    if(this.isEmpty()){
        return "stack is empty";
    }
    return this.arraylist[this.arraylist.length-1];
}
size(){
    return this.arraylist.length;
}
print(){
    console.log(this.arraylist);
}
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.print();
stack.pop();
stack.print();
console.log(stack.peek());
console.log(stack.size());