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
    /* Iteratively or Recursively
        Create a new node.
        Starting at the root.
            Check if there is a root, if not the root now becomes that
        new node!
            If there is a root, check if the value of the new node is
        greater than or less than the value of the root.
            If it is greater
                Check to see if there is a node to the right.
                If there is, move to that node and repeat these steps.
                If there is not, add that node as the right property.
            If it is less
                Check to see if there is a node to the left
                    If there is, move to that node and repeat these steps.
                    If there is not, add that node as the left property.
    */
    insert(value) {
        // node being inserted
        var newNode = new Node(value);
        // if the root is empty
        if (this.root === null) {
            this.root = newNode
            return this;
        } else {
            // going to update current as we go. starting at the root
            var current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                // value going to the left side of tree
                if (value < current.value) {
                    // if there's nothing to the left, place node
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    /* moving to current.left because the value is
                     less than current */
                    current = current.left;
                    // value is larger than current node
                } else {
                    // if right side is empty place node
                    if (current.right === null) {
                        current.right = newNode;
                        return this
                    } else {
                        // value is greater than current move to the right
                        current = current.right;
                    }
                }
            }
        }
    }
}

var tree = new BinarySearchTree();
console.log('tree', tree.insert(10))
console.log('tree', tree.insert(0))
console.log('tree', tree.insert(44))
console.log('tree', tree.insert(5))
console.log('tree', tree.insert(19))
console.log('tree', tree.insert(88))
console.log('treelist', tree)
console.log('treelist', tree.insert(-1))