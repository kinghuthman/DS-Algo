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
    /* If there are no nodes in the list, return undefined.
        Loop through the list until you reach the tail
        Set the next property of the 2nd to last node to be null.
        Set the tail to be the 2nd to last node.
        Decrement the length of the list by 1.
        Return the value of the node removed.
    */
    pop() {
        // if head is empty return undefined
        if (!this.head) return undefined;
        // set current value to head
        var current = this.head;
        // set newtail to current 
        var newTail = current;
        // while next has a value
        while (current.next) {
            // newTail = current
            newTail = current;
            // current is moved up 1
            current = current.next;
        }
        // tail is now pointing to new tail
        this.tail = newTail;
        /* set the newtails next node to be null, severs the connection
        with the node after it
        */
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
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

// console.log('push 40', list.push("40"))
console.log('5th list', list)
// console.log(list.traverse())