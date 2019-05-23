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
    pop() {
        if (!this.head) {
            return undefined;
        }
        var poppedTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedTail.prev;
            this.tail.next = null;
            poppedTail.prev = null;
        }
        this.length--;
        return poppedTail;
    }

    /* 
    If length is 0, return undefined.
    Store the current head property in a variable (we'll call
    it old head).
    If the length is one
        set the head to be null and tail to be null
    Update the head to be the next of the old head.
    Set the head's prev property to null.
    Decrement the length.
    Return old head.
    */

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        // current head that will be removed
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // head is set to the old heads next property
            this.head = oldHead.next;
            // prev is reset to null
            this.head.prev = null;
            // sever ties with the old head
            oldHead.next = null;
            this.length--
            return oldHead;
        }
    }
}

let list = new DoublyLinkedList;

console.log('1st List', list);
console.log('push', list.push(99))
console.log('push', list.push(100))
console.log('push', list.push(101))
console.log('pop', list.pop())
console.log('2nd list', list)
console.log('shift', list.shift())