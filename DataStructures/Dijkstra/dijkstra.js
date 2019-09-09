/* Function should accept a starting and ending vertex.
    Create an object and set each key to be every vertex in 
the adjacency list with a value of infinity, except for the starting
vertex which should have a value of 0.
    After setting a value in the distances object, add each vertex 
with a priority of infinity to the priority queue, except the starting
vertex, which should have a priority of 0 because that's where we begin.
    Create another object called previous and set each key to be every
vertex in the adjaceny list with a value of null.
    Start looping as long as there is anything in the priority queue.
        Dequeue a vertex from the priority queue
        If that vertex is the same as the ending vertex - we are done.
        Otherwise loop through each value in the adjacency list at that
    vertex.
            Calculate the distance to that vertex from the starting 
        vertex.
            If the distance is less than what is currently stored in our
        distances object.
                Update the distances object with new lower distance.
                Update the previous object to contain that vertex.
                Enqueue the vertex with the total distance from the starting
            node.
*/

// class PriorityQueue {
//     constructor(){
//         this.values = [];
//     }
//     enqueue(val, priority) {
//         this.values.push({val, priority});
//         this.sort();
//     }
//     dequeue(){
//         return this.values.shift();
//     };
//     sort() {
//         this.values.sort((a, b) => a.priority - b.priority);
//     };
// }
class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent; 
            idx = parentIdx;           
        }
    }
    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) ||
                    (swap !==null  && rightChild.priority < leftChild.priority)){
                        swap = rightChildIdx
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class WeightedGraph {
    constructor() {
        this.adjcacenyList = {};
    }
    addVertex(vertex) {
        // if there's nothing at that key add an empty array
        if(!this.adjcacenyList[vertex]) this.adjcacenyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjcacenyList[vertex1].push({node:vertex2,weight});
        this.adjcacenyList[vertex2].push({node:vertex1, weight});
    }
    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [] //to return at end
        // build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            // previous vertex = null
            previous[vertex] = null
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                // we are done
                // build path to return at end
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjcacenyList[smallest]){
                    let nextNode = this.adjcacenyList[smallest][neighbor]
                    console.log(neighbor)
                    // calculate new distance to new neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    if(candidate < distances[nextNode.node]){
                        //find neighboring node
                        let nextNode = this.adjacencyList[smallest][neighbor];
                        //calculate new distance to neighboring node
                        let candidate = distances[smallest] + nextNode.weight;
                        let nextNeighbor = nextNode.node;
                        if(candidate < distances[nextNeighbor]){
                            //updating new smallest distance to neighbor
                            distances[nextNeighbor] = candidate;
                            //updating previous - How we got to neighbor
                            previous[nextNeighbor] = smallest;
                            //enqueue in priority queue with new priority
                            nodes.enqueue(nextNeighbor, candidate);
                        }
                    }
                }
            }
        }
        return path.concat(smallest).reverse(); 
    }
}

var graph = new WeightedGraph();
console.log('vertex', graph.addVertex("A"))
console.log('vertex', graph.addVertex("B"))
console.log('vertex', graph.addVertex("C"))
console.log('vertex', graph.addVertex("D"))
console.log('vertex', graph.addVertex("E"))
console.log('vertex', graph.addVertex("F"))
console.log('edge', graph.addEdge("A", "B", 4))
console.log('edge', graph.addEdge("A", "C", 2))
console.log('edge', graph.addEdge("B", "E", 3))
console.log('edge', graph.addEdge("C", "D", 2))
console.log('edge', graph.addEdge("C", "F", 4))
console.log('edge', graph.addEdge("D", "E", 3))
console.log('edge', graph.addEdge("D", "F", 1))
console.log('edge', graph.addEdge("E", "F", 1))
console.log('adjaceny list', graph.adjcacenyList)
console.log('dijkstra', graph.dijkstra("A", "E").distances)