import * as Errors from "../../errors/index.js"
import * as Sphericals from "../../sphericals/index.js"
import { type Path } from "./index.js"

export class ConcatPath implements Path {
  paths: Array<Path>

  constructor(paths: Array<Path>) {
    checkPaths(paths)
    this.paths = paths
  }

  get boundary(): Sphericals.Endpoints {
    return new Sphericals.Endpoints(
      this.paths[0].boundary.start,
      this.paths[this.paths.length - 1].boundary.end,
    )
  }

  format(): string {
    const { start, end } = this.boundary
    return `TODO: ${start.format()} -> ${end.format()}`
  }
}

export function checkPaths(paths: Array<Path>): void {
  if (paths.length === 0) {
    throw new Errors.InvalideElement(
      "To form a path, the paths should at least have one edge.",
    )
  }

  for (let i = 0; i < paths.length; i++) {
    if (paths[i + 1] === undefined) return
    checkPathPair(paths[i], paths[i + 1])
  }
}

function checkPathPair(left: Path, right: Path): void {
  if (!left.boundary.end.id.eq(right.boundary.start.id)) {
    const end = left.boundary.end.format()
    const start = right.boundary.start.format()
    throw new Errors.InvalideElement(
      [
        `The given paths does **not** form a path, due to boundary mismatch:`,
        `  left.boundary.end: ${end} `,
        `  right.boundary.start: ${start}`,
      ].join("\n"),
    )
  }
}
