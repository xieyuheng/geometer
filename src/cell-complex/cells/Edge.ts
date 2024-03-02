import * as Boundaries from "../boundaries/index.js"
import { type Complex } from "../complex/index.js"
import { type Dimension } from "../dimension/index.js"
import { type Id } from "../id/index.js"
import { type Face } from "./index.js"

export type Edge = {
  kind: "Edge"
  complex: Complex
  dimension: Dimension
  id: Id
  boundary: Boundaries.Endpoints
  incidentFaces: Array<Face>
}
