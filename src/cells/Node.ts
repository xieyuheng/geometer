import { type Cell } from "../cell/index.js"
import { Id } from "../complex/index.js"
import * as Boundaries from "../boundaries/index.js"

export class Node implements Cell {
  id: Id
  boundary: Boundaries.Void

  constructor(id: Id, boundary: Boundaries.Void) {
    this.id = id
    this.boundary = boundary
  }

  format(): string {
    return `${this.id.format()}`
  }
}
