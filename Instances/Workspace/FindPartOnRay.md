+++
Target = "Workspace.FindPartOnRay"
Description = "Finds the first BasePart along the given ray."
Related = ["Workspace.FindPartOnRayWithIgnoreList", "Workspace.FindPartOnRayWithWhitelist"]
ReturnTypes = ["BasePart", "Vector3", "Vector3", "Enum.Material"]
+++

Find the first [BasePart] intersecting with the given [Ray] at the point closest to the ray's origin.

The ray will not hit backfaces of parts. If the ray originates from inside of a part it won't hit that part, with the exception of non-convex parts like [Terrain] and [MeshParts][MeshPart] with [CollisionFidelity.Default][TriangleMeshPart.CollisionFidelity].

The length of the direction vector determines the length of the cast ray, and is clamped to a maximum of 5000 studs.

The ray uses the `Default` collision group, and won't intersect with parts with [their collision group][BasePart.CollisionGroupId] set to a group that does not collide with `Default`.

Rays will still intersect with parts that are [CanCollide][BasePart.CanCollide] false.

Returns multiple values:

- The [BasePart] that was hit
- The world space position of intersection
- The world space surface normal of the part at the point of intersection
- The part's [Material][BasePart.Material], or the voxel material at the point of intersection for [Terrain].

If the ray doesn't hit anything the return values will be:

```lua
nil, ray.Origin + ray.Direction, Vector3.new(), Enum.Material.Air
```