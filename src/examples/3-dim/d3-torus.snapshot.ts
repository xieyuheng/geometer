import { Complex } from "../../index.js"

{
  const d3Torus = new Complex()

  const o = d3Torus.node()

  const a = d3Torus.edge(o, o)
  const b = d3Torus.edge(o, o)
  const c = d3Torus.edge(o, o)

  const ap = d3Torus.face({
    0: c,
    1: b,
    2: c.inverse,
    3: b.inverse,
  })
  const bp = d3Torus.face({
    0: a,
    1: c,
    2: a.inverse,
    3: c.inverse,
  })
  const cp = d3Torus.face({
    0: b,
    1: a,
    2: b.inverse,
    3: a.inverse,
  })

  const s = d3Torus.body([
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

  console.log(d3Torus.format())
}
