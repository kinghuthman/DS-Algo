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
    set(idx, val) {
        var foundNode = this.get(idx);
        if (foundNode != null) {
            foundNode.val = val;
            return true
        }
        return false;
    }

    /* If the index is less than zero or greater than or equal to 
    the length return false
        If the index is 0, unshift
        If the index is the same as the length, push
        Use the get method to access the index-1
        Set the next and prev properties on the correct nodes
    to link everything together
        Increment the length
        Return true
    */

    insert(idx, val) {
        if (idx < 0 || idx > this.length) {
            return false;
        }
        if (idx === 0) {
            return !!this.unshift(val);
        }
        if (idx === this.length) {
            return !!this.push(val);
        }
        // new node that will be inserted
        var newNode = new Node(val);
        // looking for the node before where we want to insert
        var beforeNode = this.get(idx - 1);
        // after node references the node after the before node
        var afterNode = beforeNode.next;
        // connect all nodes
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++
        return true;
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
console.log('Insert', list.insert(2, 'in here'))
console.log('4th list', list)