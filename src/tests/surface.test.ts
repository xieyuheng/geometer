import { Complex } from ".."

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

  // const s1 = ld
  //   .surface([
  //     spoke.o({ a: "a1", b: "b", c: "c", d: "d" }),
  //     spoke.o({ a: "a2", b: "b", c: "c", d: "d" }),
  //   ])
  //   .remain(["a1", "a2"])

  // ld.surface([
  //   s1.o({ a1: "a1", a2: "a" }),
  //   s1.o({ a1: "a", a2: "b" }),
  //   s1.o({ a1: "b", a2: "a2" }),
  // ])
}
