import * as gm from "../index.js"

const projectivePlane = new gm.Complex()

const start = gm.attachVertex(projectivePlane)
const end = gm.attachVertex(projectivePlane)

const leftRim = gm.attachEdge(projectivePlane, start, end)
const rightRim = gm.attachEdge(projectivePlane, end, start)

const shell = gm.attachFace(projectivePlane, [
  leftRim,
  rightRim,
  leftRim,
  rightRim,
])

console.log(gm.formatComplex(projectivePlane))
