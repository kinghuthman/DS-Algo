class WeightedGraph {
    constructor() {
        this.adjcacenyList = {};
    }
    addVertex(vertex) {
        // if there's nothing at that key add an empty array
        if(!this.adjcacenyList[vertex]) this.adjcacenyList[vertex] = []
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjcacenyList[vertex1].push({node:vertex2,weight});
        this.adjcacenyList[vertex2].push(vertex1, weight);
    }
}

var graph = new WeightedGraph();
console.log('vertex', graph.addVertex("A"))
console.log('vertex', graph.addVertex("B"))
console.log('vertex', graph.addVertex("C"))
console.log('edge', graph.addEdge("A", "B", 9))
console.log('edge', graph.addEdge("A", "C", 5))
console.log('edge', graph.addEdge("B", "C", 7))
console.log('adjaceny list', graph.adjcacenyList)