class ListNode{
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
}
function removeAllDuplicate(head){
    let sentinalNode = new ListNode(-Infinity,head);
    let curr =head;
    let previous = sentinalNode;
    while(curr !== null){
        if(curr.next !== null && curr.value === curr.next.value){
            let p = curr.next;
            while(p !== null && p.value ===curr.value){
                p = p.next;
            }
            previous.next = p;
        }
        else{
            previous = curr;
            curr = curr.next;
        }
    }
}



const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode (2);
head.next.next.next.next = new ListNode(3);
head.next.next.next.next.next = new ListNode(3);

console.log(JSON.stringify(head,null,2));
const newHead = removeAllDuplicate(head);
console.log("After:");
console.log(JSON.stringify(newHead, null, 2));
