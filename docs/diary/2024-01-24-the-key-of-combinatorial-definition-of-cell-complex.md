---
title: The key of combinatorial definition of cell complex
date: 2024-01-24
---

用离散的组合语言定义 cell complex 时，
重要的一点是不要被引入二维 Face 的语法迷惑了：

```
face: p * q * p^[-1] * q^[-1]
```

因为重点不是把一维骨架中已有的 Edge 粘贴起来，
而是把二维 Cell 的边界粘贴到一维骨架上。
只是用离散的组合语言描述二维 Cell 时，
我们的二维 Cell 是 Polygon。

对于引入三维的 Body 而言，
重点是如何把三维 Cell，即 Polyhedron，
的边界粘贴到二维骨架上。

其实回到定义，
即回到 cell complex 的 attaching map 的定义，
就能想明白这一点！

# 关于 Polyhedron 的方式

也许我们不应该先构造 Polyhedron，
再考虑以它为基础的 attaching map，
而是应该像一维的代数一样，先确定二维的代数。

```scheme
(shell
  (f1 :a :b :c)
  (f2 :b :c :d)
  (f3 :a :d))
```

注意：

- 之后还需要检查是球面而不是圆环面，等等。
- TODO 是否还需要对面给以方向呢？
  - 我们需要证明当 fn 都不同时，这样的方式可以定义 Polyhedron。
    - https://en.wikipedia.org/wiki/Net_(polyhedron)

正如一维的代数：

```scheme
(path
  (e1 :a :b)
  (e2 :a :c)
  (e3 :c :b))
```

不能先定义 Polyhedron，
是因为 Polyhedron 的定义是有问题的
（例如 [Proofs and Refutations: The Logic of Mathematical Discovery](https://en.wikipedia.org/wiki/Proofs_and_Refutations) 这本书），
可能我们就是要通过这样用 cell complex 来构造 Polyhedron，
才能给出 Polyhedron 的正确定义。
