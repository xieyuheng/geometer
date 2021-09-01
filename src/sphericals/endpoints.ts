import { Spherical } from "../spherical"
import * as Cells from "../cells"

export class Endpoints implements Spherical {
  start: Cells.Node
  end: Cells.Node

  constructor(start: Cells.Node, end: Cells.Node) {
    this.start = start
    this.end = end
  }
}
