import * as Elements from "../elements/index.js"

export function path(paths: Array<Elements.Path>): Elements.Path {
  return new Elements.ConcatPath(paths)
}
