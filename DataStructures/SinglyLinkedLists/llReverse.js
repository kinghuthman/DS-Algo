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
    remove(idx) {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        if (idx === this.length - 1) {
            return this.pop()
        }
        if (idx === 0) {
            return this.shift()
        } else {
            var previousNode = this.get(idx - 1);
            var removed = previousNode.next;
            previousNode.next = removed.next;
        }
        this.length--
        return removed;
    }

    /* Swap the head and tail
        Create a variable called next
        Create a variable called prev
        Create a variable called node and intialize it to the head
    property.
        Loop through the list.
        Set next to be the property on whatever node is.
        Set the next property on the node to be whatever prev is.
        Set prev to be the value of the node variable.
        Set the ndoe variable to be the value of the next variable.
    */
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        // loop through list
        for (var i = 0; i < this.length; i++) {
            // next set to the node that comes after head
            next = node.next;
            // node.next is set to null
            node.next = prev;
            // prev or tail is now head
            prev = node;
            // head is now set to tail or null
            node = next;
        }
        return this;
    }
    print() {
        var arr = [];
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
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
console.log('reverse', list.reverse())
console.log('11th list', list.print())
// console.log(list.traverse())