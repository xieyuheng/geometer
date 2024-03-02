import * as Boundaries from "../boundaries/index.js"
import { type Complex } from "../complex/index.js"
import { type Dimension } from "../dimension/index.js"
import { type Id } from "../id/index.js"
import { type Edge } from "./index.js"

export type Vertex = {
  kind: "Vertex"
  complex: Complex
  dimension: Dimension
  id: Id
  boundary: Boundaries.Void
  incidentEdges: Array<Edge>
}
