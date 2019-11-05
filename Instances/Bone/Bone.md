+++
Target = "Bone"
+++

Bones are used to define and animate the positions of visual-only bones within a skinned mesh part.

Bone extends [Attachment]. The inherited [CFrame][Attachment.CFrame] property is used as the reference position of the Bone. The inherited [WorldCFrame][Attachment.WorldCFrame] and the other `World...` properties will continue to return the initial un-transformed position.

Unlike [Attachments][Attachment], Bones can be children of other Bones in addition to [Parts][BasePart]. When parented to another Bone the child bone's world position will be relative to the parent Bone's position. Bones form an explicit hierarchy.

To support animation Bones have a [Transform][Bone.Transform] property that functions similarly to [Motor6D.Transform]. It is not replicated or serialized and is meant to be driven by animation as an offset from the reference pose.

The movement of Bones can affect the appearance of parts, but does not change the shape of the part physically for collision detection.

Bones internally implement the animatable joint interface and can be driven by [Animators][Animator] interchangeably with [Motor6Ds][Motor6D]. Animation data authored for a tree of motors can be played as-is on an equivalent tree of bones and vice versa.

For a Motor6D the child part is relative to:
```lua
Transform * ParentPart.CFrame * CParent
```
For a Bone all child Bones are relative to:
```lua
Transform * ParentPart.CFrame * Bone.CFrame
```

Physical [Constraints][Constraint] directly attached to Bones will use the transformed positions for simulation.

## Skinning

Bones exist primarily in service to our new skeletal skinning. Many bones, like bones in a character's face, hands, or corrective "twist joints" in limbs may not need physical representation because they are only meant for small, but expressive, movements.

Our new mesh importer supports importing meshes with skeletal joint data with vertices weighted to those joints. This will be saved in the mesh asset data for each part.

Named joints defined within a [MeshPart] or [FileMesh]'s mesh asset data will skin to Bones with the same [name][Instance.Name] found as children of that part, Bones that are direct children of those Bones (recursively), or children of other parts in the same Model that are connected to the part directly or indirectly by [Motor6D]s, [Weld]s, [BallSocketConstraint]s, [HingeConstraint]s, or other skinning-enabled joints within the same [Model]. Other descendant [Model]s are considered separate models.

In the absence of Bones, skinning will skin mesh joints relative to a connected [MeshPart] or [FileMesh]'s parent part with the same instance name as the mesh joint using the offset defined by the that part's mesh asset joint data as if it contained a Bone instance with the same name.

Skinning is based on joint connections so that classic dismemberment on death works as expected. The "within the same Model" rule prevents characters that are welded together from unexpectedly skinning together as a singular amalgam visual entity.