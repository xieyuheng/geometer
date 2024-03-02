import * as gm from "../index.js"

const graph = new gm.Complex()

const a = gm.attachVertex(graph)
const b = gm.attachVertex(graph)

const f = gm.attachEdge(graph, a, b)
const g = gm.attachEdge(graph, b, a)

console.log(gm.formatComplex(graph))
