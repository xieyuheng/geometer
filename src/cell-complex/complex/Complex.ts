import * as Cells from "../cells/index.js"

export class Complex {
  vertexes: Array<Cells.Vertex>
  edges: Array<Cells.Edge>
  faces: Array<Cells.Face>
  bodies: Array<Cells.Body>

  constructor() {
    this.vertexes = []
    this.edges = []
    this.faces = []
    this.bodies = []
  }
}
