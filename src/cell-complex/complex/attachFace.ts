import {
  Boundaries,
  Cells,
  Complex,
  dedupCells,
  type Sign,
  type SignedEdge,
} from "../index.js"

export type InversedEdge = {
  kind: "InversedEdge"
  edge: Cells.Edge
}

export function inverse(edge: Cells.Edge): InversedEdge {
  return {
    kind: "InversedEdge",
    edge,
  }
}

function createSignedEdge(x: Cells.Edge | InversedEdge): SignedEdge {
  if (x.kind === "InversedEdge") {
    return { edge: x.edge, sign: -1 as Sign }
  } else {
    return { edge: x, sign: 1 as Sign }
  }
}

export function attachFace(
  complex: Complex,
  input: Array<Cells.Edge | InversedEdge>,
): Cells.Face {
  const signedEdges = input.map(createSignedEdge)

  const face: Cells.Face = {
    kind: "Face",
    complex,
    dimension: 2,
    id: complex.faces.length,
    boundary: new Boundaries.Polygon(signedEdges),
    incidentBodies: [],
  }

  for (const signedEdge of signedEdges) {
    signedEdge.edge.incidentFaces = dedupCells([
      ...signedEdge.edge.incidentFaces,
      face,
    ])
  }

  complex.faces.push(face)

  return face
}
