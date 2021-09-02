import { Spherical } from "../spherical"
import { Id } from "../complex"
import * as Cells from "../cells"
import * as Elements from "../elements"

export class Polyhedron implements Spherical {
  joints: Array<Joint>

  constructor(pairs: Array<[Cells.Face, number, number, Cells.Face]>) {
    const joints = pairs.map((pair) => new Joint(...pair))
    check_joints(joints)
    this.joints = joints
  }
}

export class Joint {
  left_face: Cells.Face
  left_side: number
  right_side: number
  right_face: Cells.Face

  constructor(
    left_face: Cells.Face,
    left_side: number,
    right_side: number,
    right_face: Cells.Face
  ) {
    this.left_face = left_face
    this.left_side = left_side
    this.right_face = right_face
    this.right_side = right_side
  }

  get left_segment(): Elements.Path {
    return this.left_face.boundary.segment(this.left_side)
  }

  get right_segment(): Elements.Path {
    return this.right_face.boundary.segment(this.right_side)
  }

  repr(): string {
    let s = "  "
    s += `${this.left_face.id.repr()} -> ${this.left_side}`
    s += ` * `
    s += `${this.right_side} <- ${this.right_face.id.repr()}`
    return s
  }
}

function check_joints(joints: Array<Joint>): void {
  if (joints.length === 0)
    throw new Error("To build a polyhedron, joints can not be empty.")

  for (const joint of joints) {
    // TODO we need `eq` on `Path`
    // if (!joint.left_segment.id.eq(joint.right_segment.id)) {
    //   throw new Error("In a joint paired sides should be the same edge.")
    // }
  }

  // NOTE record from face to occurred sides
  const record: Map<Id, { face: Cells.Face; sides: Array<number> }> = new Map()

  for (const joint of joints) {
    {
      const value = record.get(joint.left_face.id)
      if (value) {
        value.sides.push(joint.left_side)
      } else {
        record.set(joint.left_face.id, {
          face: joint.left_face,
          sides: [joint.left_side],
        })
      }
    }

    {
      const value = record.get(joint.right_face.id)
      if (value) {
        value.sides.push(joint.right_side)
      } else {
        record.set(joint.right_face.id, {
          face: joint.right_face,
          sides: [joint.right_side],
        })
      }
    }
  }

  // NOTE every side of every face must be used once.
  for (const { face, sides } of record.values()) {
    if (face.boundary.circuit.length !== sides.length) {
      throw new Error(
        "In a polyhedron, every side of every face must be used once."
      )
    }

    if (new Set(sides).size !== sides.length) {
      throw new Error(
        "In a polyhedron, every side of every face must be used once.\n" +
          "But duplication occurred.\n"
      )
    }
  }
}
