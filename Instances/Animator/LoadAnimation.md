+++
Target = "Animator.LoadAnimation"

[[Parameters]]
Type = "Animation"
Description = "An Animation representing the animation asset to load."

[[Returns]]
Type = "AnimationTrack"
Description = "The loaded [AnimationTrack]."
+++

Loads an [AnimationTrack] from an animation asset represented by an [Animation]. The animation is not started automatically, but can be started by calling [AnimationTrack.Play].

The animation will fail to load if it is not owned by the owner of the current place.
