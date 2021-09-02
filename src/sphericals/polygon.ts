import { Spherical } from "../spherical"
import * as Cells from "../cells"
import * as Elements from "../elements"
import * as Errors from "../errors"

export class Polygon implements Spherical {
  circuit: Array<Elements.Path>

  constructor(paths: Array<Elements.Path>) {
    check_circuit(paths)
    Elements.check_paths(paths)
    this.circuit = paths
  }

  segment(i: number): Elements.Path {
    return this.circuit[i]
  }
}

function check_circuit(circuit: Array<Elements.Path>): void {
  const head = circuit[0]
  const last = circuit[circuit.length - 1]

  if (!head.boundary.start.id.eq(last.boundary.end.id))
    throw new Errors.InvalideElement("Circuit is not closed.")
}
