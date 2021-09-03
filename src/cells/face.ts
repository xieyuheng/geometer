import { Cell } from "../cell"
import { Id } from "../complex"
import * as Cells from "../cells"
import * as Elements from "../elements"
import * as Sphericals from "../sphericals"

export class Face implements Cell, Elements.Surface {
  id: Id
  boundary: Sphericals.Polygon

  constructor(id: Id, boundary: Sphericals.Polygon) {
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const boundary_repr = this.boundary.circuit
      .map((edge) => `${edge.sign === 1 ? "+" : "-"}${edge.id.repr()}`)
      .join(", ")
    return `${this.id.repr()}: [${boundary_repr}]`
  }
}
