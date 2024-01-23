import { Complex } from "../../index.js"

{
  const sphere = new Complex()

  const south = sphere.node()
  const middle = sphere.node()
  const north = sphere.node()

  const southLong = sphere.edge(south, middle)
  const northLong = sphere.edge(middle, north)

  const surface = sphere.face({
    a: southLong,
    b: northLong,
    c: northLong.inverse,
    d: southLong.inverse,
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
  const kleinBottle = new Complex()

  const origin = kleinBottle.node()

  const toro = kleinBottle.edge(origin, origin)
  const cross = kleinBottle.edge(origin, origin)

  const surface = kleinBottle.face({
    a: toro,
    b: cross,
    c: toro.inverse,
    d: cross,
  })

  console.log(kleinBottle.repr())
}

{
  const projectivePlane = new Complex()

  const start = projectivePlane.node()
  const end = projectivePlane.node()

  const leftRim = projectivePlane.edge(start, end)
  const rightRim = projectivePlane.edge(end, start)

  const surface = projectivePlane.face({
    a: leftRim,
    b: rightRim,
    c: leftRim,
    d: rightRim,
  })

  console.log(projectivePlane.repr())
}
