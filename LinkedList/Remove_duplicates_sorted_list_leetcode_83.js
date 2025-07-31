class ListNode{
    constructor(value,next=null){
        this.value = value;
        this.next=next;
    }
}
function removeDuplicate(head){
    let sentinalNode = new ListNode(-Infinity,head);
    let previous = sentinalNode;
    let curr = head;
    while(curr != null){
        if(previous.value === curr.value){
            previous.next = curr.next; 
             curr = curr.next;
        }
        else{
             previous = curr;
            curr = curr.next;
        }
       
    }
   
   return sentinalNode.next;
}


const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode (2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

console.log(JSON.stringify(head,null,2));

const newHead = removeDuplicate(head);

console.log("After:");
console.log(JSON.stringify(newHead, null, 2));
