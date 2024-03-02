import { type Body } from "../cells/index.js"

export function formatBody(body: Body): string {
  const joinsText = body.boundary.joints
    .map((joint) => joint.format())
    .join("\n")

  return `(${body.dimension} ${body.id}): {\n${joinsText}\n}`
}
