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

    /* If there is no head, return undefined.
        Store the current tail in a variable to return later.
        If the length is 1, set the head and tail to be null.
        Update the tail to be the previous Node.
        Set the newTail's next to null.
        Decrement the length.
        Return the value removed.
    */
    pop() {
        if (!this.head) {
            return undefined;
        }
        // variable that contails the popped node
        var poppedTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // tail is set to the node before it
            this.tail = poppedTail.prev;
            // next is set to null
            this.tail.next = null;
            // popped node severs ties with new tail
            poppedTail.prev = null;
        }
        this.length--;
        return poppedTail;
    }
}

let list = new DoublyLinkedList;

console.log('1st List', list);
console.log('push', list.push(99))
console.log('push', list.push(100))
console.log('push', list.push(101))
console.log('pop', list.pop())
console.log('2nd list', list)