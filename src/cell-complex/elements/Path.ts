import * as Boundaries from "../boundaries/index.js"
import type { SignedEdge } from "./SignedEdge.js"

export type Path = {
  signedEdges: Array<SignedEdge>
  boundary: Boundaries.Endpoints
}

export function createPath(): Path {
  throw new Error("TODO")
}
