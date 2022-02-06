class Graph {
    constructor(noOfNodes) {
        this.noOfNodes = noOfNodes
        this.adjList = new Map()
    }
    addNode(v) {
        this.adjList.set(v, [])
        this.noOfNodes++;
    }
    addEdge(src, dest, value) {
        var nodeObj = new Object()
        nodeObj["vertex"] = dest
        nodeObj["weight"] = value
        this.adjList.get(src).push(nodeObj)
        // this.adjList.get(dest).push(src)
    }
    showNodes() {
        var getKeys = this.adjList.keys()
        for (var i of getKeys) {
            var adj = this.adjList.get(i)
            console.log(`${i} --->` + adj)
        }
    }
    showNodesNumber() {
        return this.adjList.size
    }
    getNode() {
        var getKeys = this.adjList.keys()
        return getKeys;
    }
    getEdges(node) {
        var getKeys = this.adjList.keys()
        for (var i of getKeys) {
            if (i === node)
                return this.adjList.get(i)
        }
    }
}