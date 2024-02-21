import { type Cell } from "../cell/index.js"
import { Id } from "../complex/index.js"
import * as Elements from "../elements/index.js"
import * as Sphericals from "../sphericals/index.js"

export class Face implements Cell, Elements.Shell {
  id: Id
  boundary: Sphericals.Polygon

  constructor(id: Id, boundary: Sphericals.Polygon) {
    this.id = id
    this.boundary = boundary
  }

  format(): string {
    const boundaryText = Object.values(this.boundary.edges)
      .map((edge) => `${edge.sign === 1 ? "+" : "-"}${edge.id.format()}`)
      .join(", ")
    return `${this.id.format()}: [${boundaryText}]`
  }
}
