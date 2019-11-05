+++
Target = "LinearVelocity"
+++

Maintains a relative or absolute linear velocity along one or more axes.

LinearVelocity is a more powerful replacement for [BodyVelocity].

**Warning:** LinearVelocity is currently incomplete. Eventually it will support three modes of controlling velocity along a line, within a plane, or on all axes. For now, only absolute velocity within a plane is implemented. Wanted this to handle limits better for for air control, but haven't had a chance to implement the internal constraints for the other modes.

Currently LinearVelocity will attempt to control velocity within the plane orthogonal to [LinearVelocity.WorldAxis].
