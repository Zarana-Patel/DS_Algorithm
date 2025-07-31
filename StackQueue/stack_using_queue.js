class Stack{
    constructor(){
        this.queueList = [];
        this.size = 0;
    }
    enqueue(value){
      
         this.queueList.push(value);
        for(let i=0;i<this.queueList.length;i++){
            this.queueList.push(this.queueList.pop());
        }
        this.size += 1;
    }
    dequeue(){
        if(this.queueList.length ===0) return "queueList is empty";
        this.queueList.pop();
        this.size -=1;
    }
    print(){
        console.log(this.queueList);
    }
    isEmpty(){
        if(this.size ===0) return true;
    }
    top(){
        if(this.queueList.length ===0) return 0;
        return this.queueList[0];
    }
}
const stack_using_queue = new Stack();
stack_using_queue.enqueue(1);
stack_using_queue.enqueue(2);
stack_using_queue.enqueue(3);
stack_using_queue.enqueue(4);
stack_using_queue.dequeue();
stack_using_queue.print();
stack_using_queue.enqueue(5);
stack_using_queue.enqueue(6);
stack_using_queue.dequeue();
stack_using_queue.print();
stack_using_queue.dequeue();
stack_using_queue.print();
console.log(stack_using_queue.top());