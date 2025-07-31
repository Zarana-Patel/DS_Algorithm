class Queue {
    constructor(){
        this.dequelist = [];
        this.maxdequeList = [];
    }
      max_value() {
        if (this.maxdequeList.length === 0) {
        return -1;
        }
        return this.maxdequeList[0];
  }
    push_back(value){
        this.dequelist.push(value);
        while(this.maxdequeList.length != 0 && this.maxdequeList[this.maxdequeList.length - 1] < value){
            this.maxdequeList.pop();
        }
        this.maxdequeList.push(value);
    }
    pop_front(){
        if(this.dequelist.length ===0){
            return -1;
        }
        const val = this.dequelist.shift();
        if(val === this.maxdequeList[0]){
            this.maxdequeList.shift();
        }
        return val;
    }
}
const mq = new Queue();
mq.push_back(1);
mq.push_back(3);
mq.push_back(2);
mq.push_back(1);
console.log(mq.maxdequeList);
console.log(mq.max_value()); // 3
console.log(mq.pop_front()); // 1
console.log(mq.pop_front()); //3
console.log(mq.max_value()); // 2