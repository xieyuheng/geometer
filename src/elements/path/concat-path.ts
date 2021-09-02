import { Path } from "../path"
import * as Sphericals from "../../sphericals"
import * as Errors from "../../errors"

export class ConcatPath implements Path {
  paths: Array<Path>

  constructor(paths: Array<Path>) {
    check_paths(paths)
    this.paths = paths
  }

  get boundary(): Sphericals.Endpoints {
    return new Sphericals.Endpoints(
      this.paths[0].boundary.start,
      this.paths[this.paths.length - 1].boundary.end
    )
  }

  repr(): string {
    const { start, end } = this.boundary
    return `TODO: ${start.repr()} -> ${end.repr()}`
  }
}

function check_paths(paths: Array<Path>): void {
  if (paths.length === 0) {
    throw new Errors.InvalideElement(
      "To form a path, the paths should at least have one edge."
    )
  }

  for (let i = 0; i < paths.length; i++) {
    if (paths[i + 1] === undefined) return
    if (!paths[i].boundary.end.id.eq(paths[i + 1].boundary.start.id)) {
      const end = paths[i].boundary.end.repr()
      const start = paths[i + 1].boundary.start.repr()
      throw new Errors.InvalideElement(
        [
          `The given paths does **not** form a path, due to boundary mismatch:`,
          `  paths[${i}].boundary.end: ${end} `,
          `  paths[${i + 1}].boundary.start: ${start}`,
        ].join("\n")
      )
    }
  }
}
