import { Spherical } from "../spherical"

export interface Element {
  boundary: Spherical
  repr(): string
}
