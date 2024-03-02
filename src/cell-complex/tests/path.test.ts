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

// const path = gm.path([
//   toro,
//   polo,
//   toro,
//   gm.path([toro, toro, toro]),
//   gm.path([toro, toro, toro]),
//   gm.path([
//     toro,
//     toro,
//     toro,
//     gm.path([toro, toro, toro]),
//     gm.path([toro, toro, toro]),
//   ]),
// ])
