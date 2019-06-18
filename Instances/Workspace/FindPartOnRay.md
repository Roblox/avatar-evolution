---
Description: Find's the first base part on the given ray.
Related: 
- Instance/Workspace/FindPartOnRayWithIgnoreList
---

FindPartOnRay uses raycasting to find the first BasePart intersecting with a given Ray. This function returns the position of intersection, the surface normal of the intersecting BasePart at the point of intersection, and the BasePart's BasePart.Material.

```lua
local character = game.Players.LocalPlayer.Character
local head = character:FindFirstChild("Head")

local origin = head.Position
local lookDirection = head.CFrame.lookVector
local ray = Ray.new(origin, lookDirection * 500)

local part, hitPosition = workspace:FindPartOnRay(ray, character)

if part then
	print("Hit part: " .. part:GetFullName())
else
	print("Did not hit part")
end
```
