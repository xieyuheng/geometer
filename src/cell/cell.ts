import { Spherical } from "../spherical"
import { Id } from "../complex"

export abstract class Cell {
  instanceofCell = true

  abstract id: Id
  abstract boundary: Spherical
  abstract repr(): string

  eq(that: Cell): boolean {
    return this.id.eq(that.id)
  }
}
