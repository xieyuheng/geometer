import { type Cell } from "../cell/index.js"
import { Id } from "../complex/index.js"
import * as Sphericals from "../sphericals/index.js"

export class Node implements Cell {
  id: Id
  boundary: Sphericals.Void

  constructor(id: Id, boundary: Sphericals.Void) {
    this.id = id
    this.boundary = boundary
  }

  format(): string {
    return `${this.id.format()}`
  }
}
