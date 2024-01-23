import { Complex, gm } from "../index.js"

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

  const path = gm.path([
    toro,
    polo,
    toro,
    gm.path([toro, toro, toro]),
    gm.path([toro, toro, toro]),
    gm.path([
      toro,
      toro,
      toro,
      gm.path([toro, toro, toro]),
      gm.path([toro, toro, toro]),
    ]),
  ])
}
