+++
Target = "MeshPart"
+++

MeshParts are a [BasePart] with a custom mesh and generated physics geometry for that mesh.

The customized physics geometry for the mesh is serialized as an internal property of the [MeshPart] instance.

## Skinning

Our new mesh importer supports importing meshes with skeletal joint. This will be saved in the mesh's asset data.

Named joints defined within a [MeshPart]'s mesh asset data can skin to connected MeshParts with the same name if it also have a mesh that includes a joint with the same name. Parts can be connected directly or indirectly by [Motor6D]s, [Weld]s, [BallSocketConstraint]s, [HingeConstraint]s, or other skinning-enabled joints within the same [Model].

Mesh joints can also skin to [Bone] instances that are descendants of connected parts, or connected parts with a [FileMesh] referencing a skinned mesh.
