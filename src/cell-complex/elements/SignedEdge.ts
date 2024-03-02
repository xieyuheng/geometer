import * as Boundaries from "../boundaries/index.js"
import type { Edge } from "../cells/Edge.js"

export type Sign = 1 | -1

export type SignedEdge = {
  edge: Edge
  sign: Sign
}
