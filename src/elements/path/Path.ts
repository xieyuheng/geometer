import { type Element } from "../../element/index.js"
import * as Boundaries from "../../boundaries/index.js"

export interface Path extends Element {
  boundary: Boundaries.Endpoints
}
