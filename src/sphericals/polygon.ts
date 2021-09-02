import { Spherical } from "../spherical"
import * as Cells from "../cells"
import * as Elements from "../elements"
import * as Errors from "../errors"

export class Polygon implements Spherical {
  circuit: Array<Cells.Edge>

  constructor(edges: Array<Cells.Edge>) {
    check_circuit(edges)
    Elements.check_paths(edges)
    this.circuit = edges
  }

  segment(i: number): Cells.Edge {
    return this.circuit[i]
  }
}

function check_circuit(circuit: Array<Cells.Edge>): void {
  const head = circuit[0]
  const last = circuit[circuit.length - 1]

  if (!head.boundary.start.id.eq(last.boundary.end.id))
    throw new Errors.InvalideElement("Circuit is not closed.")
}
