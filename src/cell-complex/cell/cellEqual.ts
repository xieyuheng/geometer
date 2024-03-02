import type { Cell } from "./index.js"

export function cellEqual(x: Cell, y: Cell): Boolean {
  return x.complex === y.complex && x.dimension === y.dimension && x.id === y.id
}
