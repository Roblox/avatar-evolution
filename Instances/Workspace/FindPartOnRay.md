+++
Target = "Workspace.FindPartOnRay"
Description = "Find the first [BasePart] intersecting with the given [Ray]."
Related = ["Workspace.FindPartOnRayWithIgnoreList", "Workspace.FindPartOnRayWithWhitelist"]

[[Parameters]]
Description = "The ray."
[[Parameters]]
Default = "nil"
Description = "Any descendant parts of this object will be ignored."
[[Parameters]]
Default = "false"
Description = "Unused. Deprecated with the transition to smooth terrain."
[[Parameters]]
Default = "false"
Description = "If the ray should ignore terrain water."

[[Returns]]
Type = "BasePart"
Description = "The part that was hit."
[[Returns]]
Type = "Vector3"
Description = "The world space position of the intersection."
[[Returns]]
Type = "Vector3"
Description = "The world space normal of the part at the point of intersection."
[[Returns]]
Type = "Enum.Material"
Description = "The part's [Material][BasePart.Material], or the voxel material at the point of intersection for [Terrain]."
+++

Find the first [BasePart] intersecting with the given [Ray].

## Notes

- The ray will not hit backfaces of parts. If the ray originates from inside of a part it won't hit that part, with the exception of non-convex parts like [Terrain] and [MeshParts][MeshPart] with [CollisionFidelity.Default][TriangleMeshPart.CollisionFidelity].
- The length of [Ray.Direction] determines the length of the cast ray, and is clamped to a maximum of 5000 studs.
- The ray uses the `Default` collision group, and won't intersect with parts with [their collision group][BasePart.CollisionGroupId] set to a group that does not collide with `Default`.
- The ray will still intersect with parts that are [CanCollide][BasePart.CanCollide] false.

If the ray doesn't hit anything the return values will be:

```lua
nil, ray.Origin + ray.Direction, Vector3.new(), Enum.Material.Air
```