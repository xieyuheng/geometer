import * as Boundaries from "../boundaries/index.js"
import { type Complex } from "../complex/index.js"
import { type Dimension } from "../dimension/index.js"
import { type Id } from "../id/index.js"

export type Body = {
  kind: "Body"
  complex: Complex
  dimension: Dimension
  id: Id
  boundary: Boundaries.Polyhedron
}
