+++
Target = "Animator.StepAnimations"

[[Parameters]]
Description = "The amount of time in seconds to advance playing animations by."
+++

Manually steps animations while the game is not running. Intended for previewing animations in Studio edit mode.

Updates the target poses of animatable joints and updates the relative positions of parts if the joints are [Active][JointInstance.Active].

Throws if the game is running.