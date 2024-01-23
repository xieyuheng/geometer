import * as Cells from "../cells/index.js"
import { type Spherical } from "../spherical/index.js"

export class Endpoints implements Spherical {
  start: Cells.Node
  end: Cells.Node

  constructor(start: Cells.Node, end: Cells.Node) {
    this.start = start
    this.end = end
  }
}
