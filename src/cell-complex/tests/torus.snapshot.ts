import * as gm from "../index.js"

const torus = new gm.Complex()

const origin = gm.attachVertex(torus)

const toro = gm.attachEdge(torus, origin, origin)
const polo = gm.attachEdge(torus, origin, origin)

const spoke = gm.attachFace(torus, [
  toro,
  polo,
  gm.inverse(toro),
  gm.inverse(polo),
])

console.log(gm.formatComplex(torus))
