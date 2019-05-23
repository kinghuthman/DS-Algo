class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* Create a new node with the value passed to the function.
        If the head property is null, set the head and tail to be
    the newly created node.
        If not, set the next property on the tail to be that node.
        Set the previous property on the newly created node to be
    the tail.
        Set the tail to be the newly created node.
        Increment the length.
        Return the Doubly Linked List. 
    */

    push(val) {
        var newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList;

console.log('1st List', list);
console.log('push', list.push(99))
console.log('push', list.push(100))