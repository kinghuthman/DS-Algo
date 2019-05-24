class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    /* This function accepts some value. 
        Create a new node using that value passed to the function.
        If there are no nodes in the queue, set this node to be the 
        first and last property of the queue. 
        Otherwise, set the next property on the current last to be 
    that node, and then set the last property of the queue to be
    that node
    */
    enqueue(value) {
        var newNode = new Node(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // add to the tail
            this.last.next = newNode;
            this.last = newNode;
        }
        ++this.size;
        return this
    }
    /* If there is nofirst property, just return null;
        Store the first property in a variable
        See if the first is the same as the last(check if there is only
    1 node). If so, set the first and last to be null.
        If there is more than 1 node, set the first property to be
    be the next property of first.
        Decrement the size by 1.
        Return the value of the node dequeued.
    */
    dequeue() {
        if (this.size === 0) {
            return null
        }
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        // remove from the head
        this.first = this.first.next
        this.size--
        return temp.value;
    }
}

var queue = new Queue()
console.log('en', queue.enqueue("woo"))
console.log('en', queue.enqueue("oww"))
console.log('en', queue.dequeue())
console.log('en', queue.dequeue())
console.log('en', queue.dequeue())