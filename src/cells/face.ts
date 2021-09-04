import { Cell } from "../cell"
import { Id } from "../complex"
import * as Cells from "../cells"
import * as Elements from "../elements"
import * as Sphericals from "../sphericals"
import * as Goals from "../goals"

export class Face implements Cell, Elements.Surface {
  id: Id
  boundary: Sphericals.Polygon

  constructor(id: Id, boundary: Sphericals.Polygon) {
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const boundary_repr = Object.values(this.boundary.edges)
      .map((edge) => `${edge.sign === 1 ? "+" : "-"}${edge.id.repr()}`)
      .join(", ")
    return `${this.id.repr()}: [${boundary_repr}]`
  }

  o(vars: Record<string, string>): Goals.FaceGoal {
    // TODO check the polygon has faces
    // TODO revers the mapping
    throw new Error()
  }
}
