import * as Cells from "../cells"
import { Spherical } from "../spherical"

export class Endpoints implements Spherical {
  start: Cells.Node
  end: Cells.Node

  constructor(start: Cells.Node, end: Cells.Node) {
    this.start = start
    this.end = end
  }
}
