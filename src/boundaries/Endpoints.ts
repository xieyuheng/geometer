import * as Cells from "../cells/index.js"
import { type Boundary } from "../boundary/index.js"

export class Endpoints implements Boundary {
  start: Cells.Node
  end: Cells.Node

  constructor(start: Cells.Node, end: Cells.Node) {
    this.start = start
    this.end = end
  }
}
