class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    /* The function should accept a value.
        Create a new node with that value.
        If there are no nodes in the stack, set the first and last
    property to be the newly created node.
        If there is at least one node, create a variable that stores
    the current first property on the stack.
        Reset the first property to be the newly created node.
        Set the next property on the node to be the previously created
    variable. 
        Increment the size of the stack by 1.
    */
    push(val) {
        var newNode = new Node(val)
        // no nodes in the stack
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        if (this.size > 0) {
            // placeholder for the previous first node
            var temp = this.first
            // first node is now new node
            this.first = newNode;
            // what follows the new node is the old first node
            this.first.next = temp;
        }
        return ++this.size
    }
    /* If there is no nodes in the stack, return null.
        Create a temporary variable to store the first property on 
    the stack. 
        If there is only 1 node, set the first and last property to
    be null.
        If there is more than one node, set the first property to be
    the next property on the current first.
    */
    pop() {
        if (this.size === 0) return null;
        // store the property of first from the stack
        var temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }
        if (this.size > 1) {
            // first is now set to the next property
            this.first = this.first.next;
        }
        this.size--
        return temp.value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var stacked = new Stack()
console.log(stacked.push(2))
console.log(stacked.push(3))
console.log(stacked.push(4))
console.log(stacked.push(5))
console.log(stacked)
console.log('pop', stacked.pop())
console.log(stacked)