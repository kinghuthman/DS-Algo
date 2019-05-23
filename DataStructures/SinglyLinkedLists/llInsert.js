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

    /* If the index is less than zero or greater than the length, 
    return false. 
        If the index is the same as the length, push a new node to 
    the end of the list. 
        If the index is 0, unshift a new node to the start of the list.
        Otherwise, using the get method, access the node at the index - 1
        Set the the next property on that node to be the new node.
        Set the property on the new node to be the previous next.
        Increment the length.
        Return true.
    */
    // O(1)
    insert(val, idx) {
        // if idx is less than 0 or larger than length
        if (idx < 0 || idx > this.length) {
            // return false
            return false;
        }
        // if idx = to length
        if (idx === this.length) {
            // push value to end of list
            return this.push(val);
        }
        // if idx = 0
        if (idx === 0) {
            // add value to front of list, head/tail
            return this.unShift(val);
            // otherwise
        } else {
            // create a new node with the value inputted
            var newNode = new Node(val);
            // node right before the current idx of where you're inserting
            var prev = this.get(idx - 1);
            // placeholder to hold what used to come after idx-1
            var temp = prev.next;
            // connect new node to idx - 1
            prev.next = newNode;
            // connect new node to value/idx its taking to newNode.next
            newNode.next = temp;

        }
        this.length++
        return true;
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
console.log('insert', list.insert("best", 0))
console.log('9th list', list)
// console.log(list.traverse())