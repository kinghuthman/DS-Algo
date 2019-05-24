class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    /* Push the value into the values property on the heap.
        Bubble the value up to its correct spot. 
            Create a variable called index which is the length of the
        values property - 1
            Create a varirable called parentIndex which is the floor of
        (index-1)/2
            Keep looping as long as the values element at the parentIndex 
        is less than the values element at the child index
                Swap the value of the values element at the parentIndex
            with the value of the element property at the child index
                Set the index to be the parentIndex, and start over.
    */
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        // length of the heap
        let idx = this.values.length - 1;
        // store the value of the element itself
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            // actual value of parent
            let parent = this.values[parentIdx];
            // swap
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent; 
            idx = parentIdx;           
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