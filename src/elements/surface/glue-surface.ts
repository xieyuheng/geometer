import { Surface } from "../surface"
import * as Sphericals from "../../sphericals"
import * as Errors from "../../errors"

export class GlueSurface implements Surface {
  constructor() {}

  get boundary(): Sphericals.Polygon {
    throw new Error("TODO")
  }
}

// const s = new GlueSurface(({ v, glue }) => ({
//   faces: {
//     a: ap.o({ 0: v`b3`, 1: v`c2`, 2: v`a2`, 3: v`c0` }),
//     b: bp.o({ 0: v`b0`, 1: v`a2`, 2: v`c1`, 3: v`b3` }),
//     c: cp.o({ 0: v`c0`, 1: v`c1`, 2: v`c2`, 3: v`b0` }),
//   },
//   constraints: [glue(v`c0`, v`c1`)],
// }))
