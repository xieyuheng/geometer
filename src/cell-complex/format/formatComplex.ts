import { type Complex } from "../complex/index.js"
import * as gm from "../index.js"

export function formatComplex(complex: Complex): string {
  let s = ""

  if (complex.vertexes.length > 0) {
    s += "vertexes:\n"
    s += complex.vertexes.map((vertex) => gm.formatVertex(vertex)).join(", ")
    s += "\n"
  }

  if (complex.edges.length > 0) {
    s += "edges:\n"
    s += complex.edges.map((edge) => gm.formatEdge(edge)).join("\n")
    s += "\n"
  }

  if (complex.faces.length > 0) {
    s += "faces:\n"
    for (const face of complex.faces) {
      s += gm.formatFace(face)
      s += "\n"
    }
  }

  if (complex.bodies.length > 0) {
    s += "bodies:\n"
    for (const body of complex.bodies) {
      s += gm.formatBody(body)
      s += "\n"
    }
  }

  return s
}
