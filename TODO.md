# 1-dim algebra

- a 2-dim skeleton of a space defined by cell-complex is a groupoid (group if it has only one node)

  - edge -- primitive element  -- "generator" in presentation of group

    - 1-dim elements -- maybe `torus.chain([toro, toro, polo])`

  - face -- primitive equivalence -- "relation" in presentation of group

  - we can write equivalence proof and let the machine check our proof

    - **not** the same as checking boundary of 3-dim constructor

  - we can write equivalence and let the machine search for proofs

# 2-dim algebra

- use logic programming syntax to construct 3-dim element -- instead of `Joint`

- [outdated]  improve `joints_check` error report

- a 3-dim skeleton of a space defined by cell-complex is a 2-dim groupoid

  - face -- primitive element
  - body -- primitive equivalence

# encoding computing machines

- use `NodeId`, `NodeMap`, `EdgeId`, `EdgeMap` and so on -- to avoid copy whole graph

  - efficient computation requires efficient data structure

- 在 algebra of 1-dim 中嵌入一个图灵等价的计算规则

  - SKI？
