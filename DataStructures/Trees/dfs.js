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
        return current;
    }
    BFS(){
        var data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    /* Create a variable to store the values of nodes visited.
        Store the root of the BST in a variable called current.
        Write a helper fuction which accepts a node.
            Push the value of the node to the variable that stores
        the values.
            If the node has a left property, call the helper function
        with the left property on the node.
            If the node has a right property, call the helper function 
        with the right property on the node.
        Invoke the helper funciton with the current variable.
        Return the array of values.
    */
    DFSPreOrder(){
        // the order we are visiting the nodes
        var data = [],
            // root of the bst, starting point
            current = this.root;
            // helper function
        function traverse(node){
            // push the node into the value
            data.push(node.value);
            // check if there's a left, recursively call traverse
            if(node.left) traverse(node.left);
            // check if there's a right, recursively call traverse
            if(node.right) traverse(node.right);
        }
        // invoke the helper function with the current variable
        traverse(this.root);
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
console.log('dfspreorder', tree.DFSPreOrder())