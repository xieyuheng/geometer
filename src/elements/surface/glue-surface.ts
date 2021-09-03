import { Surface } from "../surface"
import * as Sphericals from "../../sphericals"
import * as Errors from "../../errors"

export class GlueSurface implements Surface {
  constructor() {}

  get boundary(): Sphericals.Polygon {
    throw new Error("TODO")
  }

  // o(): Goal {

  // }
}

// const s = new GlueSurface([
//   ap.o({ 0: "b3", 1: "c2", 2: "a2", 3: "c0" }),
//   bp.o({ 0: "b0", 1: "a2", 2: "c1", 3: "b3" }),
//   cp.o({ 0: "c0", 1: "c1", 2: "c2", 3: "b0" }),
//   glue("c0", "c1"),
// ])
