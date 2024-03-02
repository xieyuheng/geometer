import * as Boundaries from "../boundaries/index.js"
import { type Complex } from "../complex/index.js"
import { type Dimension } from "../dimension/index.js"
import { type Id } from "../id/index.js"
import { type Body } from "./index.js"

export type Face = {
  kind: "Face"
  complex: Complex
  dimension: Dimension
  id: Id
  boundary: Boundaries.Polygon
  incidentBodies: Array<Body>
}
