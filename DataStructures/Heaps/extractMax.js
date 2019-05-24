class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent; 
            idx = parentIdx;           
        }
    }
    /* Swap the first value in the values property with the last one
        Pop from the values property, so you can return the value at 
    the end.
        Have the new root "sink down" to the correct spot...
            Your parent index starts at 0 (the root)
            Find the index of the left child: 2 * index +1 (cant be out)
            Find the index of the right child: 2 * index +2 (cant be out) 
            If the left or right child is greater than the element...
        swap. If both left and right children are larger, swap with the
        largest child.
            The child index you swapped to now becomes the new parent index.
            Keep looping and swapping until neither child is larger than the 
        element.
            Return the old root!
    */
    extractMax(){
        // store root
        const max = this.values[0];
        // pop off the last value
        const end = this.values.pop();
        // root is now smallest number, therefore removing max, bubble down
        if(this.values.length > 0){
            this.values[0] = end;
            // bubbledown
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]
        // loop
        while(true){
            // left child index
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            // left child index is less than length of heap
            if(leftChildIdx < length) {
                // left child is the value of that index
                leftChild = this.values[leftChildIdx];
                // if left child is greater than element
                if(leftChild > element){
                    // swap is not null and sets to left child index
                    swap = leftChildIdx;
                }
            }
            // right child index is less than heap
            if(rightChildIdx < length){
                // right child is set to the value of the right child index
                rightChild = this.values[rightChildIdx];
                // swap was never set to left child 
                if((swap === null && rightChild > element) ||
                // left side is set to be swapped but right side is larger
                    (swap !==null  && rightChild > leftChild)){
                        swap = rightChildIdx
                }
            }
            if(swap === null) break;
            // fake root has found its new spot
            this.values[idx] = this.values[swap];
            // swap that child index with the fake root
            this.values[swap] = element;
            // change the value of where the idx is/traversing?
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
console.log('list', heap);
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(49);
console.log('list', heap);
console.log('extract', heap.extractMax());
console.log('list', heap);
console.log('extract', heap.extractMax());
