---
title: Low dimensional cell complex definition
date: 2024-01-23
---

# Cell

A n-cell is a primitive building block of a cell complex,
a n-cell is homeomorphic to n-disk,
whose boundary is homeomorphic to a (n-1)-sphere.

| Dimension | Cell | Boundary   |
|-----------|------|------------|
| 0         | Node | Void       |
| 1         | Edge | Endpoints  |
| 2         | Face | Polygon    |
| 3         | Body | Polyhedron |

```typescript
type Cell = Node | Edge | Face | Body

node.boundary: Void
edge.boundary: Endpoints
face.boundary: Polygon
body.boundary: Polyhedron
```

# Complex

A cell complex is built by gluing n-cells:

```typescript
type Complex = {
  nodes: Array<Node>
  edges: Array<Edge>
  faces: Array<Face>
  bodies: Array<Body>
}
```

In 0 dimension, we can add nodes freely to the complex.

```typescript
type Void = {}
```

In 1 dimension, to add an edge to the complex,
we must glue it's boundary (`Endpoints`) to previously added nodes.

```typescript
type Endpoints = { start: Node, end: Node }
```

In 2 dimension, to add a face to the complex,
we must glue it's boundary (`Polygon`) to previously added edges,
we can do this by specifying the orientation of the edge by a sign,
an edge in gluing list must connet to the next edge,
and the last edge must connet back to the first edge.

```typescript
type Polygon = { orientedEdges: Array<{ edge: Edge, sign: +1 | -1 }> }
```

In 3 dimension, to add a body to the complex,
we must glue it's boundary (`Polyhedron`) to previously added faces,
we can use name to label every side of every face
(note that, two sides of a face might be glued to the same previously added edge),
where `glueNames[i]` corresponding to the `face.boundary.sides[i]`,
sides of the same name will be glued together.

```typescript
type Polyhedron = { attachedFaces: Array<{ face: Face, glueNames: Array<string> }> }
```
