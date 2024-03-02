import { type Vertex } from "../cells/index.js"

export function formatVertex(vertex: Vertex): string {
  return `(${vertex.dimension} ${vertex.id})`
}
