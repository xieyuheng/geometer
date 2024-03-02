import * as Cells from "../cells/index.js"
import { type Id } from "../id/index.js"
import { cellEqual } from "../index.js"

export class Polyhedron {
  joints: Array<Joint>

  constructor(pairs: Array<[Cells.Face, number, number, Cells.Face]>) {
    const joints = pairs.map((pair) => new Joint(...pair))
    checkJoints(joints)
    this.joints = joints
  }
}

export class Joint {
  constructor(
    public leftFace: Cells.Face,
    public leftSide: number,
    public rightSide: number,
    public rightFace: Cells.Face,
  ) {}

  get leftSegment(): Cells.Edge {
    return this.leftFace.boundary.signedEdges[this.leftSide].edge
  }

  get rightSegment(): Cells.Edge {
    return this.rightFace.boundary.signedEdges[this.rightSide].edge
  }

  format(): string {
    let s = "  "
    s += `(${this.leftFace.dimension} ${this.leftFace.id}) -> ${this.leftSide}`
    s += ` * `
    s += `${this.rightSide} <- (${this.rightFace.dimension} ${this.rightFace.id})`
    return s
  }
}

function checkJoints(joints: Array<Joint>): void {
  if (joints.length === 0)
    throw new Error("To build a polyhedron, joints can not be empty.")

  for (const joint of joints) {
    if (!cellEqual(joint.leftSegment, joint.rightSegment)) {
      throw new Error("In a joint paired sides should be the same edge.")
    }
  }

  // NOTE record from face to occurred sides
  const record: Map<Id, { face: Cells.Face; sides: Array<number> }> = new Map()

  for (const joint of joints) {
    {
      const value = record.get(joint.leftFace.id)
      if (value) {
        value.sides.push(joint.leftSide)
      } else {
        record.set(joint.leftFace.id, {
          face: joint.leftFace,
          sides: [joint.leftSide],
        })
      }
    }

    {
      const value = record.get(joint.rightFace.id)
      if (value) {
        value.sides.push(joint.rightSide)
      } else {
        record.set(joint.rightFace.id, {
          face: joint.rightFace,
          sides: [joint.rightSide],
        })
      }
    }
  }

  // NOTE every side of every face must be used once.
  for (const { face, sides } of record.values()) {
    if (Object.values(face.boundary.signedEdges).length !== sides.length) {
      throw new Error(
        "In a polyhedron, every side of every face must be used once.",
      )
    }

    if (new Set(sides).size !== sides.length) {
      throw new Error(
        "In a polyhedron, every side of every face must be used once.\n" +
          "But duplication occurred.\n",
      )
    }
  }
}
