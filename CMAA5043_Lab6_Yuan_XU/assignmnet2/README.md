# Tank Battle — Login (React)

React implementation of the **Tank Battle** login screen designed in Figma.

- **Figma source:** [tank-game / Login Screen](https://www.figma.com/design/HLTFZXO6ZrBXA4izznTKHl/tank-game?node-id=3-2)
- **Stack:** React 18 + Vite
- **Companion file:** `../index.html` (the canvas-based tank game from Lab 5)

## Run

```bash
cd login-react
npm install
npm run dev
```

The dev server will open on `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
login-react/
├── index.html             # Vite entry, loads Inter from Google Fonts
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx           # React root
    ├── App.jsx            # App wrapper
    ├── LoginPage.jsx      # Login screen + sub-components + SVG icons
    └── styles.css         # All design tokens & layout
```

## Design fidelity

All colors, sizes, font weights, gradient stops, and spacing are taken
straight from the Figma file. The tank logo and the user / lock icons are
inline SVGs so the page has zero asset dependencies.

## Component map

| Figma node          | React element              |
|---------------------|----------------------------|
| `Login Screen`      | `.login-screen`            |
| `BG / Gradient`     | `.bg-gradient`             |
| `BG / Top Glow`     | `.bg-glow`                 |
| `BG / Grid`         | `.bg-grid`                 |
| `BG / Bottom Shade` | `.bg-shade`                |
| `Logo + Title`      | `.logo-block`              |
| `Tank Icon`         | `<TankIcon />`             |
| `TANK BATTLE`       | `.title`                   |
| `Login Card`        | `<form className=login-card>` |
| `Field / Username`  | `<Field icon={UserIcon} />`|
| `Field / Password`  | `<Field icon={LockIcon} />`|
| `Helper Row`        | `.helper-row`              |
| `Login Button`      | `.login-button`            |
| `Footer`            | `.footer`                  |

## Interactivity

- Controlled `username` / `password` / `remember` state via `useState`.
- Form submit does basic validation; success flashes a green "deploying" banner.
- Inputs glow on focus; the button has hover + active feedback.
- Fully keyboard-accessible (labels are wired to inputs).
