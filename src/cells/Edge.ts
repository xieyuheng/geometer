import { type Cell } from "../cell/index.js"
import { Id } from "../complex/index.js"
import * as Elements from "../elements/index.js"
import * as Sphericals from "../sphericals/index.js"

export class Edge implements Cell, Elements.Path {
  id: Id
  boundary: Sphericals.Endpoints

  constructor(id: Id, boundary: Sphericals.Endpoints) {
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const { start, end } = this.boundary
    return `${this.id.repr()}: ${start.repr()} -> ${end.repr()}`
  }

  get inverse(): InversedEdge {
    return new InversedEdge(this.id, this.boundary)
  }

  get sign(): -1 | 1 {
    return 1
  }
}

export class InversedEdge extends Edge {
  boundary: Sphericals.Endpoints = new Sphericals.Endpoints(
    this.boundary.end,
    this.boundary.start,
  )

  get inverse(): InversedEdge {
    return new Edge(this.id, this.boundary)
  }

  get sign(): -1 | 1 {
    return -1
  }
}
