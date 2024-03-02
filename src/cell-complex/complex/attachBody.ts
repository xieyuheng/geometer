import { Boundaries, Cells, Complex, dedupCells } from "../index.js"

export function attachBody(
  complex: Complex,
  pairs: Array<[Cells.Face, number, number, Cells.Face]>,
): Cells.Body {
  const body: Cells.Body = {
    kind: "Body",
    complex,
    dimension: 3,
    id: complex.bodies.length,
    boundary: new Boundaries.Polyhedron(pairs),
  }

  for (const [leftFace, _leftSide, _rightSide, rightFace] of pairs) {
    leftFace.incidentBodies = dedupCells([...leftFace.incidentBodies, body])
    rightFace.incidentBodies = dedupCells([...rightFace.incidentBodies, body])
  }

  complex.bodies.push(body)

  return body
}
