class ListNode{
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
    DeleteNode(node){
        node.value = node.next.value;
        node.next = node.next.next;
    }
}

const head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);
console.log(JSON.stringify(head,null,2));
head.DeleteNode(head.next );

console.log(JSON.stringify(head,null,2));