import { type Element } from "../../element/index.js"
import * as Sphericals from "../../sphericals/index.js"

export interface Path extends Element {
  boundary: Sphericals.Endpoints
}
