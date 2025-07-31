class ListNode{
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
}
function RemoveElement(head,value){
    let sentinalNode = new ListNode(-Infinity,head);
    let previous = sentinalNode;
    let curr = head;
    while(curr !== null){
        if(curr.value == value){
             previous.next = curr.next; 
             curr = curr.next;
        }
        else{ // only move previous if curr.value not matches with the value 
            previous = curr;
             curr = curr.next;
        }
       
    }
   head = sentinalNode.next;
   return head;
}

// ✅ Create nodes manually
let head = new ListNode(5);
head.next = new ListNode(5);
head.next.next = new ListNode(5);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(5);

console.log("Before:");
console.log(JSON.stringify(head, null, 2));
// ✅ Fix: Update the head with return value
head = RemoveElement(head, 5);

console.log("After:");
console.log(JSON.stringify(head, null, 2));