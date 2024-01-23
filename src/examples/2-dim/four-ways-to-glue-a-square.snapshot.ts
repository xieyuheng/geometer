import { Complex } from "../../index.js"

{
  const sphere = new Complex()

  const south = sphere.node()
  const middle = sphere.node()
  const north = sphere.node()

  const south_long = sphere.edge(south, middle)
  const north_long = sphere.edge(middle, north)

  const surface = sphere.face({
    a: south_long,
    b: north_long,
    c: north_long.inverse,
    d: south_long.inverse,
  })

  console.log(sphere.repr())
}

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

  console.log(torus.repr())
}

{
  const klein_bottle = new Complex()

  const origin = klein_bottle.node()

  const toro = klein_bottle.edge(origin, origin)
  const cross = klein_bottle.edge(origin, origin)

  const surface = klein_bottle.face({
    a: toro,
    b: cross,
    c: toro.inverse,
    d: cross,
  })

  console.log(klein_bottle.repr())
}

{
  const projective_plane = new Complex()

  const start = projective_plane.node()
  const end = projective_plane.node()

  const left_rim = projective_plane.edge(start, end)
  const right_rim = projective_plane.edge(end, start)

  const surface = projective_plane.face({
    a: left_rim,
    b: right_rim,
    c: left_rim,
    d: right_rim,
  })

  console.log(projective_plane.repr())
}
