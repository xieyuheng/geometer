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
