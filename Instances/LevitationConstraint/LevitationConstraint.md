+++
Target = "LevitationConstraint"
+++

Works against gravity and friction to maintain a minimum displacement and target velocity between it's two attachments.

[Attachment0][Constraint.Attachment0] is point on the character part with [Attachment.Axis] pointing downwards in the direction of gravity.
[Attachment1][Constraint.Attachment1] is point on the ground, with [Attachment.Axis] pointing in the direction of the surface normal, out from the part.

LevitationConstraint is a simplification of the way humanoid locomotion works.

In general humans can only apply forces upwards against the ground, with only gravity to pull them downwards. If you accelerate past a certain velocity at any point you **will** leave the ground. This constraint accounts for that and moves towards the target height without overshooting by targeting a velocity along the same axis as gravity will be 0 at the target height.

Human locomotion is provided by friction between your feet and the ground. This constraint also tries to maintain a relative velocity defined by [LevitationConstraint.MotorVelocity] along the ground plane by applying forces against the ground part, bounded by friction.

LevitationConstraint doesn't currently do any orientation. You'll still need another [constraint][AlignOrientation] to keep the character upright.

**Warning:** LevitationConstraint is likely to change dramatically soon. It probably doesn't make sense as a [Constraint] instance, and will probably be replaced with something shape-based that finds its own footholds.
