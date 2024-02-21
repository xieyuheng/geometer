import { type Boundary } from "../boundary/index.js"

export interface Element {
  boundary: Boundary
  format(): string
}
