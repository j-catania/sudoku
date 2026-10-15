# Sudoku

A static Sudoku app in English and French, built with HTML, CSS, and JavaScript, with no runtime dependencies or build step.

## Run locally

From the project root:

```sh
npx http-server . -p 8000
```

Then open <http://localhost:8000>. A local server also lets you test the service worker and PWA installation.

## Features

- Four difficulty levels: Gentle, Balanced, Tricky, and Expert.
- English and French interface, with light and dark themes.
- Notes, puzzle checking, timer, and an option to highlight mistakes.
- A hint that does not reveal the answer: it selects a cell with few possible values and highlights its column.
- Automatic saving of the current game and preferences in the browser's local storage.
- PWA installation on supported browsers; on iPhone and iPad, use the Share menu and choose “Add to Home Screen.”
- Offline caching of the app's files through the service worker.

## Installation and hosting

To install the PWA, serve the site on `localhost` or over HTTPS. The browser may show its own installation prompt; availability depends on the browser and its criteria. On iPhone and iPad, add the app to the Home Screen manually from the Share menu.

Games and preferences are stored on the device in `localStorage`. The service worker caches the app's static files. No account or application server is used.

## Main files

- `index.html`: interface and help dialogs.
- `style.css`: responsive styles and themes.
- `app.js`: puzzle generation and game logic.
- `manifest.webmanifest`: PWA metadata and icons.
- `service-worker.js`: offline app cache.

## Checks

```sh
node --check app.js
node --check service-worker.js
```
