import ld, { Complex } from "../index.js"

{
  const torus = new Complex()

  const origin = torus.node()

  const toro = torus.edge(origin, origin)
  const polo = torus.edge(origin, origin)

  const spoke = torus.face({
    a: toro,
    b: polo,
    c: toro.inverse,
    d: polo.inverse,
  })

  const path = ld.path([
    toro,
    polo,
    toro,
    ld.path([toro, toro, toro]),
    ld.path([toro, toro, toro]),
    ld.path([
      toro,
      toro,
      toro,
      ld.path([toro, toro, toro]),
      ld.path([toro, toro, toro]),
    ]),
  ])
}
