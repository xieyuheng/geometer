import { type Spherical } from "../spherical/index.js"

export interface Element {
  boundary: Spherical
  format(): string
}
