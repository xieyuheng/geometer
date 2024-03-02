import * as gm from "../index.js"

const kleinBottle = new gm.Complex()

const origin = gm.attachVertex(kleinBottle)

const toro = gm.attachEdge(kleinBottle, origin, origin)
const cross = gm.attachEdge(kleinBottle, origin, origin)

const shell = gm.attachFace(kleinBottle, [toro, cross, gm.inverse(toro), cross])

console.log(gm.formatComplex(kleinBottle))
