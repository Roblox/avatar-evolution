+++
Target = "FileMesh"
+++

FileMeshes override the appearance of their parent [BasePart] with a custom mesh.

Unlike a [MeshPart] they do not change the physical properties of the part. Because of this they support assigning [FileMesh.MeshId] at runtime, which [MeshPart]s cannot.

FileMesh and [SpecialMesh] instances are slightly slower to update in the rendering engine compared to [MeshPart]s. When possible, you should should prefer using [MeshParts] over FileMesh instances.

## Skinning

Our new mesh importer supports importing meshes with skeletal joint. This will be saved in the mesh's asset data.

Named joints defined within a [MeshPart]'s mesh asset data can skin to connected MeshParts with the same name if it also have a mesh that includes a joint with the same name. Parts can be connected directly or indirectly by [Motor6D]s, [Weld]s, [BallSocketConstraint]s, [HingeConstraint]s, or other skinning-enabled joints within the same [Model].

Mesh joints can also skin to [Bone] instances that are descendants of connected parts, or connected parts with a [FileMesh] referencing a skinned mesh.
