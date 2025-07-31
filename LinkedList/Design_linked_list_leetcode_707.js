class ListNode{
    constructor(value,next = null){
        this.value = value;
        this.next = next;
    }
}
class LinkedList{
    constructor(head=null,tail=null){
        this.head = head;
        this.tail = tail;
    }
    InsertAtHead(value){
        let newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        //List is empty
        if(this.tail === null){
            this.tail= newNode;
        }
    }
    InsertAtTail(value){
        let newNode = new ListNode(value);
        //List is empty
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    InsertAtIndex(index,value){
      if(index < 0) return;

      let newNode = new ListNode(value);
      let sentinalNode = new ListNode(-Infinity,this.head);
      let previous = sentinalNode;
      let curr = this.head;
      let nodeIndex = 0;
      while(curr !== null && nodeIndex < index){
            previous = curr;
            curr = curr.next;
            nodeIndex++;
      }
        previous.next = newNode;
        newNode.next = curr;
        //if index is 0 then 
      if (index === 0){
         this.head = sentinalNode.next;
      }
       if(curr === null ){
          this.tail = newNode;
       } 
    }
    getIndex(index){
        if(index<0) return -1;
        let curr = this.head;
        let nodeIndex = 0;
        while(curr !==null && nodeIndex < index){
            curr = curr.next;
            nodeIndex++;
        }
        return curr?curr.value:-1;
    }
    DeleteAtIndex(index){
        if(index < 0) return -1;
        let sentinalNode = new ListNode(-Infinity,this.head);
        let nodeIndex = 0;
        let previous = sentinalNode;
        let curr = this.head;
        while(curr !== null && nodeIndex < index){
            previous = curr;
            curr = curr.next;
            nodeIndex++;
        }
        //current is not null 
        previous.next = curr.next;
         if (index === 0) {
            this.head = sentinalNode.next;
        }
        // the node that was deleted 
       if (this.tail === curr) {
            if (previous === sentinalNode) {
                this.tail = null;
            } else {
                this.tail = previous;
            }
        }
    }
}

const newLinkedList = new LinkedList();
newLinkedList.InsertAtHead(2);   // 2
newLinkedList.InsertAtHead(1);   // 1 -> 2
newLinkedList.InsertAtTail(5);   // 1 -> 2 -> 4
newLinkedList.InsertAtIndex(2, 3); // 1 -> 2 -> 3 -> 4
newLinkedList.InsertAtIndex(3, 4); // 1 -> 2 -> 3 -> 4 ->5
console.log(JSON.stringify(newLinkedList, null, 2));
console.log("After Delete :::::::::");
newLinkedList.DeleteAtIndex(3); 

console.log(JSON.stringify(newLinkedList, null, 2));