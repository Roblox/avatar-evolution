+++
Target = "Animator"
+++

The Animator handles the animation of animatable joints in a [Model].

It blends and interpolates between keyframes in multiple playing [AnimationTracks][AnimationTrack] to update joint target poses every frame.

## Animatable Joints

Animator searches for animatable joints (including [Motor6Ds][Motor6D] and legacy [Motors][Motor]) in descendants of it's ancestor [Model].

Animator matches animatable joints to poses stored in an [Animation] asset based on the names of the parts the joint is connected to. For a [Motor6D], `Part0.Name` is the "parent" name, and `Part1.Name` is the "child" name.

Inside of every Animation asset model file is a [KeyframeSequence] containing several [Keyframe] instances, each containing a tree of [Poses][Pose]. The poses are matched to joints where `Pose.Parent.Name` is the "parent" name, and `Pose.Name` is the "child" name.

The Animator ignores the [names][Instance.Name] of the joints themselves.

## Animation Step

Animators are stepped every frame *before* [RunService.Stepped]. This updates the target poses of animatable joints, like [Motor6D.Transform]. The actual updating of the relative positions of the animated parts is defered until the internal `physicsStepped`, *after* [Stepped][RunService.Stepped].

For each joint the Animator will blend the the interpolated poses between keyframes in playing [AnimationTrack]s within the same [Priority][AnimationTrack.Priority] according to their [AnimationTrack.Weight]. AnimationTracks playing with a higher priority override any tracks playing with a lower priority.

If the sum of the [Weights][AnimationTrack.Weight] add up to more than 1, some tracks may be ignored.

If an Animator's model has no animated joints available it will stop any playing [AnimationTracks][AnimationTrack] on the next step.

## Replication

The replication of playing animations is handled through special internal [RemoteEvents][RemoteEvent] on the Animator itself.

If the Animator is the descendant of a [Character][Player.Character] then animations started by that player can replicate to other clients. Otherwise animations started by [LocalScript]s will only play locally.

There is a limit of 10 unique playing animations that can be replicated at any one time.
