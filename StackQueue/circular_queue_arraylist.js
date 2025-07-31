class Queue{
    constructor(k){
        this.queue = new Array(k);
        this.head = -1;
        this.tail = -1;
        this.size = 0;
        this.capacity = k;

    }
    equeue(value){
        //Queue is empty
        if(this.size ===0){
            this.queue[0] = value;
            this.head = 0;
            this.tail = 0;
            this.size =1;
        }
        //Queue is not empty
        else{
            if(this.size === this.capacity){
                return false; // if the queue is full , insert fails
            }
            this.tail = (this.tail +1) % this.capacity;
            this.queue[this.tail] = value;
            this.size +=1;
        }
    }
    dequeue(){
        let element;
        if(this.isEmpty()){
            return "queue is empty";
        }
        //Queue has only one element
        if(this.head === this.tail){
            element = this.queue[this.head];
            this.head = -1;
            this.tail = -1;
            this.size =0;
        }
        //
        else{
            element = this.queue[this.head];
            this.head = (this.head+1)% this.capacity;
            this.size -=1;
        }
    }
    isEmpty(){
        return this.head === -1;
           
    }
    print(){
        console.log(this.queue);
    }
}

const queue = new Queue(3);
queue.equeue(1);
queue.equeue(2);
queue.equeue(3);
queue.print();
queue.dequeue();
queue.print();
queue.equeue(4);
queue.print();