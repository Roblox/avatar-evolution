---
layout: default
title: Skinning
---

# Skinning

The Avatar Evolution beta build provides support for skinned meshes using linear skeletal skinning, with each vertex weighted to up to 4 joints.

There is no new part type for skinned meshes. Existing MeshParts, SpecialMeshes or FileMeshes can be used. If the mesh part id references a mesh with skinning data then the mesh will appear skinned provided there are Bones or other skinned parts to skin to.

See the "Skinning Rules" section below on rules on how a mesh determines which Bones and/or MeshParts to skin to.

There is a new Instance type, [Bone](api/class/Bone), which can be put under mesh parts to animate them. These need to be named to match the joint names in the mesh.

There is no change to the animation format. Existing animations can be played on Bones provided they are oriented to match the equivalent Motors.

# Import

Mesh and animation import is via `.fbx` files, ideally in FBX 7.4 format. Earlier versions may work.

Skinned meshes should be imported using the **AvatarImporter** plugin.

Use the 'Custom' setting for non-R15 rigs. This will create the necessary Bone instances under the MeshParts, and make an AnimationController to play animations instead of a Humanoid.

The 'Rthro', 'Rthro Slender' and 'R15' settings will create a 15 part R15 rig, as before, but if there is skinning data in the .fbx file this will be imported with the mesh and used at runtime.

There are several general possibilities:

1. **S15** &mdash; R15 compatible, 15 separate MeshParts that skin together.

   Build the character as you would for R15 but skin the mesh to the joints in the authoring package.
   Use the 'Rthro', 'Rthro Slender' or 'R15' import setting. This will create a Humanoid based character that is backwards compatible with R15.

   See this [S15_Lola.fbx](files/S15_Lola.fbx) as an example.

2. **S1** &mdash; R15 animation compatible, 1 MeshPart.

   Makes sure you have the standard 15 joints named as per R15, except 'HumanoidRootNode' should be named 'HumanoidRootPart'. Skin these to a single mesh.

   Use the 'Custom' import setting. This will create a Model that can be used to play current catalog R15 animations but on a single mesh.

   See this [S1_Lola.fbx](files/S1_Lola.fbx) as an example.

   Using one of the 'Rthro', 'Rthro Slender' or 'R15' import settings will create a Humanoid rig that can be used as a starter character, provided a few changes are made:

   - The HumanoidRootPart and the imported MeshPart are welded together.
   - `Humanoid.AutomaticScalingEnabled` is disabled, and the hip height is manually entered to correctly put the character on the ground.
   - `CanCollide` on the mesh part is turned off, and the part size of the HumanoidRootPart is adjusted to the desired collision box.

   **Warning**: the resultant character Model will not be fully compatible with existing scripts - for example scripts looking for specific Parts eg. Head will fail.

3. **Custom mesh** &mdash; Mesh with variable number of parts and bones.

   The joint names do not matter. Each mesh object in the authoring package will generate a MeshPart on import. Bones corresponding to the authored joints are added under the MeshParts.

Animations can be imported using the Animation Editor, and played back through a Humanoid or AnimationController Animator as per regular part animations.

## Other Import Methods

Bulk import through the Game Explorer in Studio is not supported and may not import skinned meshes correctly. The implementation is a bit convoluted  and it's scheduled for a rewrite.

Import through the properties panel on a part works, but will not create any `Bone` instances for you or do other corrections done in the avatar importer.

# Skinning Rules

Our new mesh importer supports importing meshes with skeletal joint data with vertices weighted to those joints. This will be saved in the mesh asset data for each part.

Named joints defined within a [MeshPart](api/class/MeshPart) or [FileMesh](api/class/FileMesh)'s mesh asset data will skin to [Bones](api/class/Bone) with the same [name](api/class/Instance#Name) found as children of that part, Bones that are direct children of those Bones (recursively), or children of other parts in the same Model that are connected to the part directly or indirectly by [Motor6D](api/class/Motor6D)s, [Weld](api/class/Weld)s, [BallSocketConstraint](api/class/BallSocketConstraint)s, [HingeConstraint](api/class/HingeConstraint)s, or other skinning-enabled joints within the same [Model](api/class/Model). Other descendant [Model](api/class/Model)s are considered separate models.

In the absence of Bones, skinning will skin mesh joints relative to a connected [MeshPart](api/class/MeshPart) or [FileMesh](api/class/FileMesh)'s parent part with the same instance name as the mesh joint using the offset defined by the that part's mesh asset joint data as if it contained a Bone instance with the same name.

Skinning is based on joint connections so that classic dismemberment on death works as expected. The "within the same Model" rule prevents characters that are welded together from unexpectedly skinning together as a singular amalgam visual entity.

# Limited Bone Scaling Support

We don't currently support scale in animation data.

Check the joint scale values in your DCC tool. If there is any difference in the scale values on the joints between the skin bind pose (joints when the mesh was skinned) and the current (and or) animated joint scales then the mesh may not be correctly scaled.

To avoid these issues, it is best to have the joints unscaled at the time of binding, and not to use scale when posing or animating. In short, don't scale the joints in the authoring program.

A common practice is to zero (or make identity) the joint transforms before binding the mesh.

You can still achieve squash and stretch effects using translation. See this [translation.rbxl](files/translation.rbxl) example. Use the AnimationEditor to play the simple animation.

MeshParts that have skinned mesh may be scaled. If you do this with the scale widget in Studio any descendant Bone instances will have their position updated appropriately to preserve the mesh shape.

However, if you change the MeshPart Size property, the descendant Bone instance will not have their positions adjusted. This is consistent with how Attachments work.

Any animations played on the MeshPart will have the translation values scaled according to the mesh scale.

In summary: you can use the scale widget in Studio to create character Models of various scales/proportions, and have animations play consistently.
