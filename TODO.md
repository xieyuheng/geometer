# path

`createPath` -- result part of `attachFace`

Polygon should be an object instead of class

Joint -- left: HalfJoint, right: HalfJoint

HalfJoint: face, edgeIndex, sign

Shell has joints

术语选择：

- Polygon/Path 的一个边 -- side, segment -- 不能直接用 edge 因为还带有 sign
- Polyhedron/Shell 的一个面 -- wall -- 不能直接用 face 因为还带有粘贴方式

`Polygon` -- `checkEdgesClose`

# shell

fix `Polyhedron` should not have `pairs` -- should be more easy to search

`Polyhedron` -- should have named boundary faces
`Polyhedron` -- `checkShellsClose`

`elements/Shell` -- do not need named sub-shells, for now
`elements/Shell` -- `checkShells`

# format

design c-like format

# note

[note] 几何中的很多分类问题，
可能也等价于 normalization 问题，
即通过 normalization 来给一个集合的分类，

- 如何用这种观点去理解 the-symmetries-of-things 中的分类？
  是否像 lambda 演算一样，应该先有表达式再有 reduction to normal form？

# 1-dim algebra

a 2-dim skeleton of a space (defined by cell-complex) is a groupoid (group if it has only one node)

- primitive element -- edge -- "generator" in presentation of group

- element -- path

- primitive equivalence -- face -- "relation" in presentation of group

- equivalence -- shell

  - a shell is always bounded by a edges

- we can write equivalence proof and let the machine check our proof

  - **not** the same as checking boundary of 3-dim constructor

- we can write equivalence and let the machine search for proofs

# presentation of a group -- wikipedia

https://en.wikipedia.org/wiki/Presentation_of_a_group

# 2-dim algebra

use logic programming syntax to construct 3-dim element -- instead of `Joint`

[outdated]  improve `jointsCheck` error report

a 3-dim skeleton of a space (defined by cell-complex) is a 2-dim groupoid

- primitive element -- face
- primitive equivalence -- body
