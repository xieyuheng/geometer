import { type Face } from "../cells/index.js"

export function formatFace(face: Face): string {
  const boundaryText = face.boundary.signedEdges
    .map(
      ({ edge, sign }) =>
        `${sign === 1 ? "+" : "-"}(${edge.dimension} ${edge.id})`,
    )
    .join(", ")

  return `(${face.dimension} ${face.id}): [${boundaryText}]`
}
