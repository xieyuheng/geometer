export type VarFinder = (strs: TemplateStringsArray) => Var

export class Var {
  id: number
  name: string

  static counter = 0

  constructor(name: string) {
    this.id = Var.counter++
    this.name = name
  }

  // NOTE side-effect on map
  static finderFromVarMap(map: Map<string, Var>): VarFinder {
    return (strs) => {
      const found = map.get(strs[0])
      if (found !== undefined) {
        return found
      } else {
        const variable = new Var(strs[0])
        map.set(variable.name, variable)
        return variable
      }
    }
  }
}

export function v(strs: TemplateStringsArray): Var {
  const [name] = strs
  return new Var(name)
}
