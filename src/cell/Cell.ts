import { Id } from "../complex/index.js"
import { type Element } from "../element/index.js"

export interface Cell extends Element {
  id: Id
}
