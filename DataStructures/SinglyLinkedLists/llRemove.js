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
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(val, idx) {
        var foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false
    }
    insert(val, idx) {
        if (idx < 0 || idx > this.length) {
            return false;
        }
        if (idx === this.length) {
            return this.push(val);
        }
        if (idx === 0) {
            return this.unShift(val);
        } else {
            var newNode = new Node(val);
            var prev = this.get(idx - 1);
            var temp = prev.next;
            prev.next = newNode;
            newNode.next = temp;

        }
        this.length++
        return true;
    }

    /* If the index is less than zero or greater than the length,
    return undefined.
        If the index is the same as the length-1, pop 
        If the index 0, shift
        Otherwise, using the get method, access the node at the 
        index - 1.
        Set the next property on that node to be the next of the 
        next node. 
        Decrement the length.
        Return the value of the node(removed).
    */
    // O(1) or O(n)
    remove(idx) {
        /* if idx is less than 0 or greater than/equal to length r
        return undefined*/
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        // if idx is === length - 1 
        if (idx === this.length - 1) {
            // remove the last Node
            return this.pop()
        }
        // if idx = 0
        if (idx === 0) {
            // remove the first node
            return this.shift()
        } else {
            // get the node before the one you want to remove
            var previousNode = this.get(idx - 1);
            // removed stores the node removed
            var removed = previousNode.next;
            /* connect the previous node and the one after 
            what was removed */
            previousNode.next = removed.next;
        }
        this.length--
        return removed;
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
console.log('get', list.get(0))
console.log('push woah', list.push("woah"))
console.log('set', list.set("friend", 2))
console.log('8th list', list)
console.log('insert', list.insert("best", 2))
console.log('9th list', list)
console.log('reemove', list.remove(1))
console.log('10th list', list)
// console.log(list.traverse())