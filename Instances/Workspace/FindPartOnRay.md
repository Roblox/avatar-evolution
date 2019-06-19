+++
target = "Workspace.FindPartOnRay"
description = "Find's the first base part on the given ray."
related = ["Workspace.FindPartOnRayWithIgnoreList"]
+++

Find the first `BasePart` intersecting with the given `Ray` at the point closest to the ray's origin.

The ray will not hit backfaces of parts. If the ray originates from inside a typical part it will never hit that part, with the exception of non-convex parts like Terrain and MeshParts with CollisionFidelity.Default.

The length of the direction vector matters, and is clamped to a maximum of 5000 studs.

Returns multiple values:

- The part that was hit
- The world space position of intersection
- The world space surface normal of the part at the point of intersection
- `BasePart.Material` for most `BaseParts`, or the voxel material at the point of intersection for `Terrain`.

If the ray doesn't hit anything the return values will be:

```lua
nil, ray.Origin + ray.Direction, Vector3.new(), Enum.Material.Air
```