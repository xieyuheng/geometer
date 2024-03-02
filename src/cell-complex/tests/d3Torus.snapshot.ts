import * as gm from "../index.js"

const d3Torus = new gm.Complex()

const o = gm.attachVertex(d3Torus)

const a = gm.attachEdge(d3Torus, o, o)
const b = gm.attachEdge(d3Torus, o, o)
const c = gm.attachEdge(d3Torus, o, o)

const ap = gm.attachFace(d3Torus, [c, b, gm.inverse(c), gm.inverse(b)])
const bp = gm.attachFace(d3Torus, [a, c, gm.inverse(a), gm.inverse(c)])
const cp = gm.attachFace(d3Torus, [b, a, gm.inverse(b), gm.inverse(a)])

const s = gm.attachBody(d3Torus, [
  [bp, 0, 3, cp],
  [bp, 3, 0, ap],
  [cp, 0, 3, ap],
  [cp, 2, 1, ap],
  [cp, 1, 2, bp],
  [ap, 2, 1, bp],
])

// TODO Syntax inspired by logic programming and relational algebra.

// const s = d3Torus.body([
//   ap(b3, c2, a2, c0),
//   bp(b0, a2, c1, b3),
//   cp(c0, c1, c2, b0),
// ])

console.log(gm.formatComplex(d3Torus))
