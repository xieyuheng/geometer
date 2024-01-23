import * as Cells from "../cells/index.js"
import * as Elements from "../elements/index.js"
import * as Errors from "../errors/index.js"
import { type Spherical } from "../spherical/index.js"

export class Polygon implements Spherical {
  edges: Record<string, Cells.Edge>

  constructor(edges: Record<string, Cells.Edge>) {
    checkEdgesClose(Object.values(edges))
    Elements.checkPaths(Object.values(edges))
    this.edges = edges
  }

  edge(name: string): Cells.Edge {
    const edge = this.edges[name]
    if (edge === undefined) {
      throw new Error(`Unknown edge name: ${name}`)
    }
    return edge
  }

  segment(i: number): Cells.Edge {
    return Object.values(this.edges)[i]
  }
}

function checkEdgesClose(edges: Array<Cells.Edge>): void {
  const head = edges[0]
  const last = edges[edges.length - 1]

  if (!head.boundary.start.id.eq(last.boundary.end.id)) {
    throw new Errors.InvalideElement("The edges do not close.")
  }
}
