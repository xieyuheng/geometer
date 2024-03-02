import * as gm from "../index.js"

const sphere = new gm.Complex()

const south = gm.attachVertex(sphere)
const middle = gm.attachVertex(sphere)
const north = gm.attachVertex(sphere)

const southLong = gm.attachEdge(sphere, south, middle)
const northLong = gm.attachEdge(sphere, middle, north)

const shell = gm.attachFace(sphere, [
  southLong,
  northLong,
  gm.inverse(northLong),
  gm.inverse(southLong),
])

console.log(gm.formatComplex(sphere))
