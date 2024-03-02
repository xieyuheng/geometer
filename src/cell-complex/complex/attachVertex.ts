import { Boundaries, Cells, Complex } from "../index.js"

export function attachVertex(complex: Complex): Cells.Vertex {
  const vertex: Cells.Vertex = {
    kind: "Vertex",
    complex,
    dimension: 0,
    id: complex.vertexes.length,
    boundary: new Boundaries.Void(),
    incidentEdges: [],
  }

  complex.vertexes.push(vertex)

  return vertex
}
