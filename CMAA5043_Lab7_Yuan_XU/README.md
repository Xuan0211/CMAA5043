# Lab 7: ReactJS Performance and Lazy Loading

This section outlines the tasks completed for Lab 7, focusing on data fetching, performance measurement, and component lazy loading.

## Assignment No 1: Real-time LatestNews Component

### Objective
Create a `LatestNews` component that displays the current time fetched from a remote API and updates every second.

### Functionality
- Fetches time from `http://quan.suning.com/getSysTime.do`.
- Implements error handling: If the API fails, it falls back to the system's local time, appending "(local time)".
- Updates every second using `setInterval`.

---

## Assignment No 2: Measure Rendering Time

### Objective
Use `performance.now()` to measure the rendering time of three components.

### Functionality
- `performance.now()` is recorded before rendering and inside `useEffect` after rendering.
- The difference is logged to the console in milliseconds.
- Implemented in `Header.jsx`, `Footer.jsx`, and `LatestNews.jsx`.

---

## Assignment No 3: Lazy-Load Components

### Objective
Use `React.lazy` to lazy-load at least one component.

### Functionality
- The `GalleryPage` component is now loaded lazily in `App.jsx` using `React.lazy`.
- A `Suspense` wrapper with a fallback loading indicator is added to `Routes` to handle the asynchronous loading of the component.
