import * as Cells from "../cells/index.js"

export class Endpoints {
  start: Cells.Vertex
  end: Cells.Vertex

  constructor(start: Cells.Vertex, end: Cells.Vertex) {
    this.start = start
    this.end = end
  }
}
