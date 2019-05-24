class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        // if the root is empty
        if (this.root === null) {
            this.root = newNode
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    search(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        // return node
        return current;
    }
    /* Create a queue(can be an array), and a variable to store the values
    of nodes visited.
        Place the root node in the queue.
        Loop as long as there is anything in the queue.
        Dequeue a node from the queue and push the value of the node into
    the variable that stores the nodes.
        If there is a left property on the node dequeued - add it to the 
    queue.
        If there is a right property on the node dequeued - add it to the 
    queue.
        Return the variable that stores the values.
    */
    BFS(){
        var data = [],
            queue = [],
            node = this.root;
            // starting from the root
        queue.push(node);
        // while there's anything in the queue
        while(queue.length){
            // remove something from the beginning
            node = queue.shift();
            // take out whats in node and add to data
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

var tree = new BinarySearchTree();
console.log('tree', tree.insert(10))
console.log('tree', tree.insert(6))
console.log('tree', tree.insert(15))
console.log('tree', tree.insert(3))
console.log('tree', tree.insert(8))
console.log('tree', tree.insert(20))
console.log('treelist', tree)
console.log('found', tree.search(10))
console.log('bfs', tree.BFS())