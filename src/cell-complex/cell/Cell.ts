import { type Complex } from "../complex/index.js"
import { type Dimension } from "../dimension/Dimension.js"
import { type Id } from "../id/index.js"

export interface Cell {
  complex: Complex
  dimension: Dimension
  id: Id
}
