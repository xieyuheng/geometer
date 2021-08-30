import { Cell } from "../cell"
import { Id } from "../complex"
import * as Sphericals from "../sphericals"

export class Node extends Cell {
  id: Id
  boundary: Sphericals.Void

  constructor(id: Id, boundary: Sphericals.Void) {
    super()
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    return `${this.id.repr()}`
  }
}
