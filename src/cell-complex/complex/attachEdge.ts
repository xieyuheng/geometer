import { Boundaries, Cells, Complex, dedupCells } from "../index.js"

export function attachEdge(
  complex: Complex,
  start: Cells.Vertex,
  end: Cells.Vertex,
): Cells.Edge {
  const edge: Cells.Edge = {
    kind: "Edge",
    complex,
    dimension: 1,
    id: complex.edges.length,
    boundary: new Boundaries.Endpoints(start, end),
    incidentFaces: [],
  }

  start.incidentEdges = dedupCells([...start.incidentEdges, edge])
  end.incidentEdges = dedupCells([...end.incidentEdges, edge])

  complex.edges.push(edge)

  return edge
}
