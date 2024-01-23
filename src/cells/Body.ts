import { type Cell } from "../cell/index.js"
import { Id } from "../complex/index.js"
import * as Sphericals from "../sphericals/index.js"

export class Body implements Cell {
  id: Id
  boundary: Sphericals.Polyhedron

  constructor(id: Id, boundary: Sphericals.Polyhedron) {
    this.id = id
    this.boundary = boundary
  }

  format(): string {
    const joinsText = this.boundary.joints
      .map((joint) => joint.format())
      .join("\n")
    return `${this.id.format()}: {\n${joinsText}\n}`
  }
}
