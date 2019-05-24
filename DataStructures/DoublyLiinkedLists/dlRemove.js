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
        var newNode = new Node(val);
        var beforeNode = this.get(idx - 1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++
        return true;
    }
    /* If the index is less than zero or greater than or equal to the
    length return undefined.
        If the index is 0, shift.
        If the index is the same as the length-1 pop.
        Use the get method to retrieve the item to be removed.
        Update the next and prev properties to remove the found node from
    the list.
        Set next and prev to null on the found node.
        Decrement the length.
        Return the removed node.
    */
    remove(idx) {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        if (idx === 0) {
            return this.shift();
        }
        if (idx === this.length - 1) {
            return this.pop()
        }
        var nodeRemoved = this.get(idx);
        var beforeNode = nodeRemoved.prev;
        var afterNode = nodeRemoved.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // nodeRemoved.prev.next = nodeRemoved.next;
        // nodeRemoved.next.prev = nodeRemoved.prev;
        // sever the removed node's ties to the prev and next node
        nodeRemoved.next = null;
        nodeRemoved.prev = null;
        this.length--;
        return nodeRemoved;
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
console.log('remove', list.remove(1))
console.log('5th list', list)