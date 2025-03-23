---
title: cell complex vs. cobordism
date: 2024-09-27
---

几何建模需要以拓扑建模为基础，
而拓扑建模有很多中方案。

最广为人知的是 cell complex，
在很多人的认识中 cell complex 就是代数拓扑的研究对象本身。

最近我发现 cobordism 也可以用于构造代数拓扑的研究对象，
并且与 cell complex 相比，
cobordism 可以简化两个元素粘连（glue）相关的 API。

注意，在实现 glue 时，
如果已知 glue 之前两个元素的边界，
要能够求出 glue 之后所得元素的边界。

cell complex：

```cicada
boundary(Element(n)): Spherical(sub1(n))
glue(Element(n), Element(sub1(n)), Element(n)): Element(n)
```

cobordism：

```cicada
boundary(Element(n)): List(Spherical(sub1(n)))
glue(Element(n), Element(n)): Element(n)
```

为了能够像 cell complex 构造拓扑元素，
在 cobordism 的语境下，
只需要 `List(Spherical(sub1(n)))`
能够确定唯一一个 `Element(n)` 就可以了。
这显然是满足的。

在 glue 两个 cell complex 的时候，
需要指定被 glue 的子元素，
以保证所得的 element 的边界还是一个 Spherical 元素。
但是其实没有被指定的部分，
只要是同一个子元素，
就应该按照「被 glue」来理解，
所以可以在 glue 的时候可以不指定子元素，
但是这样就要求 element 的边界不是 `Spherical(sub1(n))`
而是 `List(Spherical(sub1(n)))`。

也就是说在这种以 glue 为「乘法」的代数中，
相乘只是把需要相乘的元素收集起来，
不用考虑顺序等排布问题，
因为 cell 之间会按照边界是否相同自己 glue 起来。

引入元素时，
还是需要按照 cell complex 的规则，
要求边界是经检查为 spherical 的 element。

如何证明这种构造是有效的？
如何定义有效？
