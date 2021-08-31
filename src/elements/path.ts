import { Element } from "../element"
import { Spherical } from "../spherical"
import * as Cells from "../cells"
import * as Sphericals from "../sphericals"
import * as Errors from "../errors"

export class Path extends Element {
  edges: Cells.Edge[]

  constructor(edges: Cells.Edge[]) {
    super()
    check_path(edges)
    this.edges = edges
  }

  get boundary(): Sphericals.Endpoints {
    return new Sphericals.Endpoints(
      this.edges[0].boundary.start,
      this.edges[this.edges.length - 1].boundary.end
    )
  }

  repr(): string {
    const { start, end } = this.boundary
    return `TODO: ${start.repr()} -> ${end.repr()}`
  }
}

function check_path(edges: Cells.Edge[]): void {
  if (edges.length === 0) {
    throw new Error("The edges should at least have one edge.")
  }

  for (let i = 0; i < edges.length; i++) {
    if (edges[i + 1] === undefined) return
    if (!edges[i].boundary.end.eq(edges[i + 1].boundary.start)) {
      const end = edges[i].boundary.end.repr()
      const start = edges[i + 1].boundary.start.repr()
      throw new Errors.BoundaryMismatch(
        [
          `The given edges does **not** form a path, due to boundary mismatch:`,
          `  edges[${i}].boundary.end: ${end} `,
          `  edges[${i + 1}].boundary.start: ${start}`,
        ].join("\n")
      )
    }
  }
}
