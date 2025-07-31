/*
    Implement the operations using stacks
    * push(x) = Push element x to the back of the queue
    * pop() = Remove the element front front of the queue
    * peek() = get the front element
    * empty()- returns whether the queue is empty
*/
class Queue{
    constructor(){
        this.stack_enqueue = [];
        this.stack_dequeue = [];
        this.size = 0;
    }
    enqueue(value){
            this.stack_enqueue.push(value);
            this.size +=1;
    }
    dequeue(){
        if (this.size === 0) return "";

        if (this.stack_dequeue.length === 0) {
            while (this.stack_enqueue.length > 0) {
                this.stack_dequeue.push(this.stack_enqueue.pop());
            }
        }
        this.size -=1;
        return this.stack_dequeue.pop();
    }
    peek(){
        if (this.size === 0) return "";

        if (this.stack_dequeue.length === 0) {
            while (this.stack_enqueue.length > 0) {
                this.stack_dequeue.push(this.stack_enqueue.pop());
            }
        }
        this.size -=1;
        return this.stack_dequeue[this.stack_dequeue.length-1];
    }
    print_enqueue(){
        console.log(this.stack_enqueue);
    }
     print_dequeue(){
        console.log(this.stack_dequeue);
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print_enqueue();
queue.dequeue(); // 1
queue.dequeue(); // 2
console.log(queue.peek());
queue.enqueue(4);
queue.print_dequeue();

queue.dequeue(); // 3
queue.print_enqueue();
queue.dequeue(); // 4
queue.print_dequeue();