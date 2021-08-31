import { Spherical } from "../spherical"

export abstract class Element {
  abstract boundary: Spherical
  abstract repr(): string
}
