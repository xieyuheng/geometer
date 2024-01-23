import { type Cell } from "../cell/index.js"
import { Id } from "../complex/index.js"
import * as Elements from "../elements/index.js"
import * as Goals from "../goals/index.js"
import * as Sphericals from "../sphericals/index.js"

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
