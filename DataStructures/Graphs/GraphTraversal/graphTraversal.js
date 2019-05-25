class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    /* The function should accept a starting node
    Create a list to store the end result, to be returned at the very
end.
    Create an object to store visited vertices.
    Create a helper function which accepts a vertex.
        The helper function should return early if the vertex is
    empty.
        The helper function should place the vertex it accepts into 
    the visit object and push that vertex into the result array.
        Loop over all of the values in the adjacencyList for that 
    vertex.
        If any of those values have not been visited, recursively invoke
    the helper function with that vertex.
    Invoke the helper function with the starting vertex.
    Return the result array.
*/
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            //If vertex is empty return undefined
            if (!vertex) return null;
            // Mark vertex as visited 
            visited[vertex] = true;
            // Add vertex to results list
            result.push(vertex)
            // For each neighbor in vertex's neighbors 
            adjacencyList[vertex].forEach(neighbor => {
                // if neighbor is not visited
                if (!visited[neighbor]) {
                    // recursively call dfs on neighbor
                    return dfs(neighbor)
                }
            })
        })(start);
        return result
    }
    /* Function should accept a starting node.
        Create a stack to help use keep track of vertices (use a 
    list/array).
        Create a list to store the end result, to be returned at
    the very end.
        Create an object to store visited vertices.
        Add the starting vertex to the stack, and mark it visited.
        While the stack has something in it.
            Pop the next vertex from the stack.
            If that vertex hasn't been visited yet.
                Mark it as visited.
                Add it to the result list.
                Push all of its neighbors into the stack.
        Return the result array.
    */
    depthFirstIterative(start) {
        const visited = {};
        const result = [];
        const stack = [start];
        // add starting vertex to the stack, mark it visited.
        visited[start] = true;
        while (stack.length) {
            // pop next vertex from the stack
            let currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                // vertex hasn't been visited yet
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    // push all of its neighbors into the stack.
                    stack.push(neighbor)
                }
            })
        }
        return result;
    }
    /* Function should accept a starting vertex
        Create a queue(can use an array) place the starting vertex in it
        Create an array to store the nodes visited.
        Create an object to store nodes visited.
        Mark the starting vertex as visited.
        Loop as long as there is anything in the queue.
        Remove the first vertex from the queue and push it into the
    array that stores nodes visited.
        Loop over each vertex in the adjaceny list for the vertex you
    are visiting. 
        If it is not inside the object that stores nodes visited, mark
    it as visited and enqueue that vertex.
        Once you have finished looping, return the array of visited nodes.
    */
    breadthFirst(start) {
        const queue = [start];
        const visited = {};
        const result = [];
        let currentVertex;
        visited[start] = true;
        while (queue.length) {
            // remove the first node from the beginning
            currentVertex = queue.shift();
            // push onto array that is returned at end
            result.push(currentVertex);

            // go to all of the currentvertex's neighbors
            this.adjacencyList[currentVertex].forEach(neighbor => {
                // has it been visited?
                if (!visited[neighbor]) {
                    // mark as visited
                    visited[neighbor] = true;
                    // push onto the queue
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

let g = new Graph()
console.log('add', g.addVertex("A"))
console.log('add', g.addVertex("B"))
console.log('add', g.addVertex("C"))
console.log('add', g.addVertex("D"))
console.log('add', g.addVertex("E"))
console.log('add', g.addVertex("F"))
console.log(g)
console.log('addedge', g.addEdge("A", "B"))
console.log('addedge', g.addEdge("A", "C"))
console.log('addedge', g.addEdge("B", "D"))
console.log('addedge', g.addEdge("C", "E"))
console.log('addedge', g.addEdge("D", "E"))
console.log('addedge', g.addEdge("D", "F"))
console.log('addedge', g.addEdge("E", "F"))
console.log(g)
console.log('dfr', g.depthFirstRecursive("A"))
console.log('dfr', g.depthFirstIterative("A"))
console.log('bfs', g.breadthFirst("A"))