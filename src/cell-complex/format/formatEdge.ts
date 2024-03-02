import { type Edge } from "../cells/index.js"
import { formatVertex } from "./formatVertex.js"

export function formatEdge(edge: Edge): string {
  const { start, end } = edge.boundary

  return `(${edge.dimension} ${edge.id}): ${formatVertex(start)} -> ${formatVertex(end)}`
}
