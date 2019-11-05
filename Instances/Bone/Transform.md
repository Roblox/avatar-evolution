+++
Target = "Bone.Transform"
+++

Functions similarly to [Motor6D.Transform] and can be animated by [Animator]s. Not replicated or serialized. Meant to be driven by animation as an offset from the reference pose.

The final position of a bone for rendering and simulation will be `Transform * WorldCFrame`.