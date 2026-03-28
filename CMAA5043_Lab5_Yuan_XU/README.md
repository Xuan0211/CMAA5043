# Tank Game — CMAA5043 Lab 5

A 2D tank game built with HTML5 Canvas as part of the CMAA5043 Creative Prototyping course.

## How to Run

Open `index.html` directly in any modern web browser. No build step or server required.

## Controls

| Key | Action |
|-----|--------|
| W / A / S / D | Move tank |
| Space | Shoot |
| R | Restart (after game over) |

## Assignments Implemented

### Assignment 1 — Bug Fix: Boundary Clamping
The `updateGame()` function now calls `clampTank()` after every movement update.
The tank (40×40 px) is constrained so it cannot leave the 800×600 canvas:

```js
function clampTank() {
  const half = TANK_SIZE / 2;
  tankX = Math.max(half, Math.min(CANVAS_W - half, tankX));
  tankY = Math.max(half, Math.min(CANVAS_H - half, tankY));
}
```

### Assignment 2 — New Features

**Option A: Enemy Targets**
Red enemy tanks spawn on random canvas edges and move toward the player.
Enemies are destroyed by bullets, each worth 10 points. Spawn rate increases over time.

**Option B: Visual Feedback**
- Particle explosion effects trigger on bullet hits and tank collisions.
- A HUD displays live Score, Lives, and a shoot cooldown indicator.
- A game-over overlay shows the final score with a restart prompt.

**Option C: Landscape**
Static decorative rocks and bushes are procedurally placed across the battlefield, giving the map visual depth and a sense of environment.

## Credits

Yuan XU — CMAA5043 Creative Prototyping, Lab 5
