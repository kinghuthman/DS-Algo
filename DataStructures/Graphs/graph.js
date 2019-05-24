class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    /* Write a method called addVertex, which accepts a name of a 
    vertex.
        It should add a key to the adjacent list with the name of the 
    vertex and set it's value to be an empty array.
    */
    addVertex(vertex) {
        // nothing there
        if (!this.adjacencyList[vertex]) {
            // set the vertex to an empty array
            this.adjacencyList[vertex] = [];
        }
    }
    /* Function should accept two vertices, called vertex1 and vertex2
        The function should find in the adjacency list the key of
    vertex1 and push vertex2 to the array.
        The function should find in the adjacency list the key of
    vertex2 and push vertex1 to the array.
        Don't worry about handling errors/invalid vertices.
    */
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    /* Function should accept two vertices.
        Function should reassign the key of vertex1
    to be an array that does not contain vertex2.
        The function should reassign the key of vertex2
    to be an array that does not contain vertex1.
    */
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
    /* The function should accept a vertex to remove.
        The function should loop as long as there are any other
    vertices in the adjaceny list for that vertex.
        Inside of the loop, call our removeEdge function with.
    the vertex we are removing and any values in the adjacency list
    for that vertex.
        Delete the key in the adjacency list for that vertex.
    */
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

var g = new Graph()
console.log('add', g.addVertex("ohio"))
console.log('add', g.addVertex("florida"))
console.log('add', g.addVertex("san jose"))
console.log('add', g.addVertex("lumberton"))
console.log(g)
console.log('addedge', g.addEdge("san jose", "lumberton"))
console.log('addedge', g.addEdge("ohio", "florida"))
console.log(g)
console.log('removeedge', g.removeEdge("ohio", "florida"))
console.log(g)
console.log('removevertex', g.removeVertex("lumberton"))
console.log(g)