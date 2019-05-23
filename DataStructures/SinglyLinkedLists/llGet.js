class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    traverse() {
        var current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unShift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode.head;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /* This function should accept an index.
        If the index is less than zero or greater than or equal to
    the length of the list, return null.
        Loop through the list until you reach the index and return
    the node at that specific index. 
    */
    // O(n)
    get(idx) {
        /* if the index is less than 0 or greater than or equal
    to the length of the list return null        
        */
        if (idx < 0 || idx >= this.length) return null;
        /* count with a counter starting at 0, add 1 to counter 
        as we traverse
        */
        var counter = 0;
        // keep track of current position as we traverse
        var current = this.head;
        // loop from start until you reach idx
        while (counter !== idx) {
            // current moves up
            current = current.next;
            // add one to counter to account for current moving up
            counter++;
        }
        return current;
    }
}

var list = new SinglyLinkedList
console.log('1st list', list);
console.log('push Hello', list.push('hello'))
console.log('2nd list', list)
console.log('push Goodbye', list.push("goodbye"))
console.log('3rd list', list)
console.log('push !', list.push("!"))
console.log('4th list', list)
console.log('pop!', list.pop())
console.log('5th list', list)
console.log('shift', list.shift())
console.log('6th list', list)
console.log('unShift', list.unShift("woo!"))
console.log('7th list', list)
console.log('get', list.get(1))
// console.log(list.traverse())