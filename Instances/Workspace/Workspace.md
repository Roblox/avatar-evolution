+++
target = "Workspace"
description = "The Workspace is the service in which any objects that are to be rendered in the 3D world exist."
+++

The Workspace is a Service containing the replicated, simulated world.

Objects descending from workspace will be rendered and physically interact.

Workspace is the root of the physical world. Parts, joints, and Constraints will not function unless they are in Workspace.