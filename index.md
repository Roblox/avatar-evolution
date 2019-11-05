---
layout: default
title: Avatar Evolution
---

Avatar Evolution represents a massive cross-team effort, prototyping and building new technology to enable developers to build next-generation games and avatars on Roblox:

- "Mesh deformation" through skeletal skinning
- New physics components for more stable and realistic characters
- Improved mesh and animation importers.
- And more exciting features, coming soon!

It's still early, but we want your feedback!

We're releasing a special beta build of Roblox Studio here.

# Studio Beta Build

This prototype build of Roblox Studio includes:

- Skeletal skinning with `MeshParts` and `Bones`
- Improved mesh and animation importers
- New physics components used by the new character controller suite

You can download it here:

- [Download Windows build]() (.zip)
- [Download macOS build]() (.zip)

This is a custom build of Roblox Studio. Make sure to copy the folder from this .zip to your computer before running the build  &mdash; don’t run directly from .zip.

If you find issues with new features in this build please [report them on GitHub](https://github.com/Roblox/avatar-evolution/issues).

**Warning:** Don't use this build to edit published places in production! This build includes support for several new APIs that aren't supported in live games. We may add/remove/rename these before release. Data loss may occur!

# New Character Controller

We're working on a new componentized character controller suite written in Lua to eventually replace Humanoids as the default controller.

It uses a new framework written in Lua and a set of newly formulated physics components included in this special build.

You can download [a place file including the new controller here]().

You can find [documentation for the new controller here]().

# New Mesh and Animation importer

We've spent a lot of time rewriting the internals of the mesh and animation importer to make it more consistent and reliable. This importer now supports importing parts with skinning information.

Read more about [the changes and how to correctly import skinned meshes here]().

# New API

This beta build includes several new classes.

- [Bone](api/class/Bone)
- [CharacterHelper](api/class/CharacterHelper)
- [LevitationConstraint](api/class/LevitationConstraint)
- [LinearVelocity](api/class/LinearVelocity)

And changes to several existing types:

- [MeshPart](api/class/MeshPart) &mdash; skinned mesh support
- [FileMesh](api/class/FileMesh) &mdash; skinned mesh support
- [Animator](api/class/Animator) &mdash; support for animating Bones

**Warning:** These new types aren't supported on production and may be change dramatically before release. Don't use places or models using these in a production game!