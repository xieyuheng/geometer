import { Id } from "../complex"
import { Element } from "../element"
import { Spherical } from "../spherical"

export abstract class Cell implements Element {
  abstract id: Id
  abstract boundary: Spherical
  abstract repr(): string

  eq(that: Cell): boolean {
    return this.id.eq(that.id)
  }
}
