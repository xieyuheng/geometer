import { type Cell } from "../cell/index.js"
import { Id } from "../complex/index.js"
import * as Elements from "../elements/index.js"
import * as Boundaries from "../boundaries/index.js"

export class Edge implements Cell, Elements.Path {
  id: Id
  boundary: Boundaries.Endpoints

  constructor(id: Id, boundary: Boundaries.Endpoints) {
    this.id = id
    this.boundary = boundary
  }

  format(): string {
    const { start, end } = this.boundary
    return `${this.id.format()}: ${start.format()} -> ${end.format()}`
  }

  get inverse(): InversedEdge {
    return new InversedEdge(this.id, this.boundary)
  }

  get sign(): -1 | 1 {
    return 1
  }
}

export class InversedEdge extends Edge {
  boundary: Boundaries.Endpoints = new Boundaries.Endpoints(
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
