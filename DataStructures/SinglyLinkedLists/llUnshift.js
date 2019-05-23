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
    /* This function should accept a value.
        Create a new node using the value passed to the function.
        If there is no head property on the list, set the head and tail
    to be the newly created node.
        Otherwise set the newly created node's next property to be the 
    current head property on the list.
        Set the head property on the list to be that newly created node. 
        Increment the length of the list by 1.
        Return the linked list.
    */
    unShift(val) {
        // newNode is a created node with the value of val
        var newNode = new Node(val);
        // if there is no previous head 
        if (!this.head) {
            // set head to the head of new node
            this.head = newNode.head;
            // set tail to the head of new node
            this.tail = this.head;
            // otherwise
        } else {
            // move the previous head by setting it to the newNode's next
            newNode.next = this.head;
            // the previous head is now replaced by the new node as head
            this.head = newNode;
        }
        // increment length by 1
        this.length++;
        // return list
        return this;
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
// console.log(list.traverse())