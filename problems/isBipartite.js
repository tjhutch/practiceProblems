/*
Given an undirected graph, return true if and only if it is bipartite.
Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.
The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1.  There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.
 */

// turns out, this only works for a connected graph. Occasionally it works for disconnected graphs. If you're lucky.
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
function isBipartite(graph) {
  const left = [];
  const right = [];
  return addEdges(left, right, graph, 0);
}

function addEdges(mySide, otherSide, graph, index, progress) {
  if (index >= graph.length) {
    return true;
  }
  const edges = graph[index];
  if (edges.length === 0) {
    mySide[index] = true;
    return addEdges(mySide, otherSide, graph, index + 1);
  }
  if (!mySide[index]) {
    mySide[index] = true;
  }
  for (let j = 0; j < edges.length; j++) {
    if (mySide[edges[j]]) {
      return false;
    } else {
      if (!otherSide[edges[j]]) {
        if (!addEdges(otherSide, mySide, graph, edges[j])) {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(isBipartite([[2,4],[2,3,4],[0,1],[1],[0,1],[7],[9],[5],[],[6],[12,14],[],[10],[],[10],[19],[18],[],[16],[15],[23],[23],[],[20,21],[],[],[27],[26],[],[],[34],[33,34],[],[31],[30,31],[38,39],[37,38,39],[36],[35,36],[35,36],[43],[],[],[40],[],[49],[47,48,49],[46,48,49],[46,47,49],[45,46,47,48]]));
