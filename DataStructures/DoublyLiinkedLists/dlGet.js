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
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
            this.length--
            return oldHead;
        }
    }
    unshift(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this;
    }

    /* If the index is less than 0 or greater or equal to the length,
    return null.
        If the index is less than or equal to half the length of the list 
            loop through the list starting from the head and loop
        towards the middle
            Return the node once it is found.
        If the index is greater than half the length of the list
            Loop through the list starting from the tail and loop
        towards the middle.
            Return the node once it is found.
    */

    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        if (idx <= this.length / 2) {
            // confirm we've reached index
            var count = 0;
            // the starting point
            var current = this.head;
            while (count !== idx) {
                // to traverse the list
                current = current.next;
                count++;
            }
            return current;
        } else {
            // end of the list
            var count = this.length - 1
            // start from the tail
            var current = this.tail;
            while (count !== idx) {
                // traverse through the list from right to left
                current = current.prev;
                count--;
            }

        }
        return current;
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
console.log('unshift', list.unshift('hiii'))
console.log('unshift', list.unshift('bye'))
console.log('get', list.get(2))