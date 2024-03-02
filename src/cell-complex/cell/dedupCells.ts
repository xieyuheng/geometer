import { cellEqual, type Cell } from "./index.js"

export function dedupCells<A extends Cell>(cells: Array<A>): Array<A> {
  const resultCells: Array<A> = []
  for (const cell of cells) {
    if (!resultCells.find((resultCell) => cellEqual(cell, resultCell))) {
      resultCells.push(cell)
    }
  }

  return resultCells
}
