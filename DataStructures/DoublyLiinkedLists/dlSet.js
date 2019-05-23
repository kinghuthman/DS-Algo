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
    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        if (idx <= this.length / 2) {
            var count = 0;
            var current = this.head;
            while (count !== idx) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            var count = this.length - 1
            var current = this.tail;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    /* Create a variable which is the result of the get method at 
    the index passed to the function.
        If the get method returns a valid node, set the value of
    that node to be value passed to the function.
        Return true.
        Otherwise return false.
    */
    set(idx, val) {
        // variable for retrieved node
        var foundNode = this.get(idx);
        // if node exists and isnt null
        if (foundNode != null) {
            // set the value of the node found to the variable
            foundNode.val = val;
            return true
        }
        return false;
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
console.log('set', list.set(2, '10000'))
console.log('3rd list', list)