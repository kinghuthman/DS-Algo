// piece of data = val
// reference to next node - next

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

    /* This function should accept a value
        Create a new node using the value passed to the function.
        If there is no head property on the list, set the head and tail
    to be the newly created node.
        Otherwise set the next property on the tail to be the new
    node and set the tail property on the list to be the newly created 
    node.
        Increment the length by one.
        Return the linked list.
    */

    push(val) {
        var newNode = new Node(val)
        // edge case if it's empty
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // take the current tail, set the next property to the newNode
            this.tail.next = newNode;
            // newNode is now our new tail
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
}
// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// console.log(first.next.next.next = new Node("are"))

var list = new SinglyLinkedList
console.log('1st list', list);
console.log('push hi', list.push('hi'))
console.log('2nd list', list)
console.log('push you', list.push("you"))
console.log('3rd list', list)
console.log('push 99', list.push(99))
console.log('4th list', list)
console.log('push 40', list.push("40"))
console.log('5th list', list)
console.log(list.traverse())

// list.push("Hello")
// list.push("Goodbye")
// console.log(list.push(1))
// console.log(list)