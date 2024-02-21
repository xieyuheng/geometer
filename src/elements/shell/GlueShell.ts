import * as Boundaries from "../../boundaries/index.js"
import { type Shell } from "./index.js"

export class GlueShell implements Shell {
  constructor() {}

  get boundary(): Boundaries.Polygon {
    throw new Error("TODO")
  }

  // o(): Goal {

  // }
}

// const s = new GlueShell([
//   ap.o({ 0: "b3", 1: "c2", 2: "a2", 3: "c0" }),
//   bp.o({ 0: "b0", 1: "a2", 2: "c1", 3: "b3" }),
//   cp.o({ 0: "c0", 1: "c1", 2: "c2", 3: "b0" }),
//   glue("c0", "c1"),
// ])

// "b3": [ap, "0"]
// "c2": [ap, "1"]
// "a2": [ap, "2"]
// "c0": [ap, "3"]
