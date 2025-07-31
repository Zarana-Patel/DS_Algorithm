class Queue{
    constructor(k){
        this.head = -1;
        this.tail= -1;
        this.size =0;
        this.queuelist = new Array(k);
        this.capacity = k;
    }
    isEmpty(){
        return this.head === -1;   
    }
    enqueue(value){
        if(this.size === 0){
            this.queuelist[0] = value;
            this.head = 0;
            this.tail = 0;
            this.size =1;
           
        }
        else{ // Queue List is full
            if(this.size === this.capacity){
               this.resize(2*this.capacity);
            }
        this.tail = (this.tail +1) % this.capacity;
        this.queuelist[this.tail] = value;
        this.size +=1;
        }
    }
    resize(newCapacity){
        let new_array = new Array(newCapacity);
        let current = this.head;
        let nextIndex = 0;
        while(this.head != this.tail){
            new_array[nextIndex] = this.queuelist[current];
            nextIndex++;
             if (current === this.tail) break;
           current= (current+1) % this.capacity;
        }
        this.queuelist = new_array;
        this.head = 0;
        this.tail = this.size-1;
        this.capacity = newCapacity;
       
    }
    dequeue(){
        let element;
        if(this.isEmpty()){
            return "queue is empty";
        }
        if(this.head ===  this.tail){
            element = this.queuelist[this.head];
            this.head =-1;
            this.tail =-1;
            this.size =0;
        }
        else{
            element = this.queuelist[this.head];
            this.head = (this.head +1) % this.capacity;
            this.size -=1;
        }      
    }
    print(){
        console.log(this.queuelist);
    }
}
const queue = new Queue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.enqueue(4);
queue.enqueue(5);
queue.print();