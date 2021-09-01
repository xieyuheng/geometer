import { Cell } from "../cell"
import { Id } from "../complex"
import * as Cells from "../cells"
import * as Sphericals from "../sphericals"

export class Body implements Cell {
  id: Id
  boundary: Sphericals.Polyhedron

  constructor(id: Id, boundary: Sphericals.Polyhedron) {
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const joins_repr = this.boundary.joints
      .map((joint) => joint.repr())
      .join("\n")
    return `${this.id.repr()}: {\n${joins_repr}\n}`
  }
}
