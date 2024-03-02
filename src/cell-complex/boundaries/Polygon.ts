import type { SignedEdge } from "../index.js"

export class Polygon {
  constructor(public signedEdges: Array<SignedEdge>) {}
}
