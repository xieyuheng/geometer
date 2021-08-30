import { Cell } from "../cell"
import { Id } from "../complex"
import * as Cells from "../cells"
import * as Sphericals from "../sphericals"

export class Face extends Cell {
  id: Id
  boundary: Sphericals.Polygon

  constructor(id: Id, boundary: Sphericals.Polygon) {
    super()
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const edge_repr = (edge: Cells.Edge) =>
      `${edge.sign === -1 ? "-" : ""}${edge.id.repr()}`
    return `${this.id.repr()}: [${this.boundary.circuit
      .map(edge_repr)
      .join(", ")}]`
  }
}
