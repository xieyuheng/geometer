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

  repr(): string {
    return `${this.id.repr()}`
  }
}
