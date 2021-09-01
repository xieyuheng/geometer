import { Spherical } from "../spherical"
import * as Cells from "../cells"

export class Polygon extends Spherical {
  circuit: Array<Cells.Edge>

  constructor(circuit: Cells.Edge[]) {
    super()
    check_circuit(circuit)
    this.circuit = circuit
  }

  segment(i: number): Cells.Edge {
    return this.circuit[i]
  }
}

function check_circuit(circuit: Cells.Edge[]): void {
  if (circuit.length === 0)
    throw new Error("Circuit should at least have one edge.")

  let head = circuit[0]
  const rest = circuit.slice(1)
  const last = circuit[circuit.length - 1]

  if (!head.boundary.start.id.eq(last.boundary.end.id))
    throw new Error("Circuit is not closed.")

  for (const edge of rest) {
    if (!head.boundary.end.id.eq(edge.boundary.start.id))
      throw new Error("Circuit is not closed.")

    head = edge
  }
}
