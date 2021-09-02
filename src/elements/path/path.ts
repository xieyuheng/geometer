import { Element } from "../../element"
import * as Sphericals from "../../sphericals"

export interface Path extends Element {
  boundary: Sphericals.Endpoints
}
