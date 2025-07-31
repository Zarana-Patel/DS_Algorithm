class Queue{
    constructor(){
        this.queueList = [];
    }
    enqueue(value){
        if (this.stack.length === 0) {
            this.stack.push(value);
            return;
        }

        // Pop all elements to reach the bottom
        let top = this.stack.pop();
        this.enqueue(value);

        // Push everything back after inserting at the bottom
        this.stack.push(top);
    }
    dequeue(){
        return this.queueList.pop();
    }
   // Peek at the front element (top of stack)
    peek() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(this.queueList);
queue.dequeue(); // 1
queue.dequeue(); // 2
console.log(queue.peek());
queue.enqueue(4);
queue.print_dequeue();