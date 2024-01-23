import * as Cells from "../cells"
import * as Sphericals from "../sphericals"

export class Id {
  dim: number
  n: number

  constructor(dim: number, n: number) {
    this.dim = dim
    this.n = n
  }

  eq(that: Id): boolean {
    return this.dim === that.dim && this.n === that.n
  }

  repr(): string {
    return `(${this.dim} ${this.n})`
  }
}

export class Complex {
  nodes: Array<Cells.Node>
  edges: Array<Cells.Edge>
  faces: Array<Cells.Face>
  bodies: Array<Cells.Body>

  constructor() {
    this.nodes = []
    this.edges = []
    this.faces = []
    this.bodies = []
  }

  node(): Cells.Node {
    const id = new Id(0, this.nodes.length)
    const node = new Cells.Node(id, new Sphericals.Void())
    this.nodes.push(node)
    return node
  }

  edge(start: Cells.Node, end: Cells.Node): Cells.Edge {
    const id = new Id(1, this.edges.length)
    const edge = new Cells.Edge(id, new Sphericals.Endpoints(start, end))
    this.edges.push(edge)
    return edge
  }

  face(edges: Record<string, Cells.Edge>): Cells.Face {
    const id = new Id(2, this.face.length)
    const face = new Cells.Face(id, new Sphericals.Polygon(edges))
    this.faces.push(face)
    return face
  }

  body(pairs: Array<[Cells.Face, number, number, Cells.Face]>): Cells.Body {
    const id = new Id(3, this.bodies.length)
    const body = new Cells.Body(id, new Sphericals.Polyhedron(pairs))
    this.bodies.push(body)
    return body
  }

  repr(): string {
    let s = ""

    if (this.nodes.length > 0) {
      s += "nodes:\n"
      s += this.nodes.map((node) => node.repr()).join(", ")
      s += "\n"
    }

    if (this.edges.length > 0) {
      s += "edges:\n"
      s += this.edges.map((edge) => edge.repr()).join("\n")
      s += "\n"
    }

    if (this.faces.length > 0) {
      s += "faces:\n"
      for (const face of this.faces) {
        s += face.repr()
        s += "\n"
      }
    }

    if (this.bodies.length > 0) {
      s += "bodies:\n"
      for (const body of this.bodies) {
        s += body.repr()
        s += "\n"
      }
    }

    return s
  }
}
