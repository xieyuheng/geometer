---
title: cobordism based topological modelling
date: 2024-10-11
---

尝试用 cobordism 而不是 cell complex 来做拓扑建模。

```cicada
Vertex -- Void
Edge -- VertexGroup
Face -- EdgeGroup Wire
Body -- FaceGroup Shell
     -- Building

glue(Group, Group): Group
```

不应该给每个维度的 Cell 和 Element 以特殊的名字，
而是应该用维度的数字命名：
- Cell 用 Cn。
- Element 用 En。

```cicada
C0 -- boundary(C0): Void
C1 -- boundary(C1): S0 <: E0
C2 -- boundary(C2): S1 <: E1
C3 -- boundary(C3): S2 <: E2

glue(E, E): E
```

为了引入 Cell，可能还是需要以 Spherical 的 Element 为边界：

- C0 -- 没有边界，可以自由引入
- C1 -- 边界是 S0 -- 两个 C0
- C2 -- 边界是 S1 -- C1 构成的一个圈
- C3 -- 边界是 S2 -- C2 构成的一个球

如果 boundary 只是包含外部边界，
那么就只能构造带有边缘的 Manifold，
而不能构造一般的 cell complex。
只有 boundary 同时带有内部边界，
才有可能构造一般的 cell complex。
但是这样在高维的时候会有歧义吗？
