---
layout: default
title: Avatar Evolution
---

Avatar Evolution represents a massive cross-team effort working on prototyping and building a suite of new technology to enable developers to create next-generation games and avatars on Roblox:

- Skeletal skinning a.k.a. "Mesh deformation"
- Custom PBR surface appearances
- New physics components for more stable and realistic characters
- Improved mesh and animation importers
- And more exciting features coming soon!

Even though it's still early and these features are in varying stages of pre-release development we're releasing a special beta build of Roblox Studio where you can try them today.

Everything here is subject to change before release!

Let us know what you think! We're putting this build out in an early state to get your feedback while we still have the freedom to make large changes before it goes live. Help us shape the future of Roblox!

# Studio Beta Build

This prototype build of Roblox Studio includes:

- Skeletal skinning with `MeshParts` and `Bones`
- Custom `SurfaceAppearances` for Parts
- Improved mesh and animation importers
- New physics instances used by the new character controller suite

You can download it here:

- [Download Windows build](https://github.com/Roblox/avatar-evolution/releases/download/v0.413.0.370037/avatar-evolution-0.413.0.370037-windows-x64.zip) (.zip, 178 MB)
- [Download macOS build](https://github.com/Roblox/avatar-evolution/releases/download/v0.413.0.370037/avatar-evolution-0.413.0.370037-macos.zip) (.zip, 176 MB)

This is a custom build of Roblox Studio. Make sure to copy the folder from this .zip to your computer before running the build  &mdash; don’t run directly from .zip.

Use of this build is subject to a [limited use licence](limited-terms-of-use).

If you find issues with new features in this build please [report them on GitHub](https://github.com/Roblox/avatar-evolution/issues). We really want your feedback!

**Warning:** Don't use this build to edit published places or anything you're not ready to lose! This build includes support for several new APIs that aren't supported in live games or team create. We may add/remove/rename any of these new classes before release. **Data loss may occur!**

# New Character Controller

We're working on a new componentized character controller suite written from scratch in Lua, built on top of newly formulated physics components included in this special build.

The intent is to eventually replace Humanoids as the default controller, with existing games left as-is with the option to opt-in.

- [Download a demo place file including the new controller](files/TestPlace.rbxlx) (.rbxl)

You can find [documentation for the new controller here](files/AvatarComponents.pdf). (.pdf)

# New Mesh and Animation importer

We've spent a lot of time rewriting the internals of the mesh and animation importer to make it more reliable and consistent. The importer also now supports importing meshes with skinning information.

Read about [how to import skinned meshes here](skinning).

# New API

This beta build includes several new classes.

- [Bone](api/class/Bone)
- [CharacterHelper](api/class/CharacterHelper)
- [LevitationConstraint](api/class/LevitationConstraint)
- [LinearVelocity](api/class/LinearVelocity)
- [SurfaceAppearance](api/class/SurfaceAppearance)

And new functionality for several existing types:

- [MeshPart](api/class/MeshPart) &mdash; skinned mesh support
- [FileMesh](api/class/FileMesh) &mdash; skinned mesh support
- [Animator](api/class/Animator) &mdash; support for animating Bones

**Warning:** These new types aren't supported on production and may change dramatically before release. Don't use them in places or models used in a live game! Production servers and clients don't know these new Instances exist. They won't work in Team Create either!

## API Stability Status

Unlike production APIs, these new APIs are subject to change dramatically between builds. Many of them are incomplete or otherwise don't yet match our internal specifications.

**Stable:** Subject to change but mostly matches spec.

- Bone
- MeshPart
- SurfaceAppearance

**Unstable:**

- CharacterHelper &mdash; Unstable. Plan change it to use parent part instead of model root, rename to "CharacterSensor"
- LevitationConstraint &mdash; Very unstable. Physical response is good, but not happy with surfacing it as a Constraint instance. Plan to build in some kind of ground sensor region instead of relying on external raycasts.
- LinearVelocity &mdash; Incomplete.
