# Project Guidelines

## Scope and architecture
- This is a dependency-free static Sudoku app. `index.html` contains the interface, `style.css` its responsive themes, and `app.js` the game logic.
- Keep game data, language, and theme preferences in browser `localStorage`. Do not add a backend, analytics, or network persistence; keep privacy copy accurate.

## Implementation conventions
- Use plain HTML, CSS, and browser JavaScript; do not add a framework or build step.
- Keep French and English strings in `TRANSLATIONS` in `app.js`, and mark translatable interface text in `index.html` with `data-i18n` attributes. Keep accessible labels and titles translated too.
- Apply light and dark appearance through the root `data-theme` attribute and preserve the user's theme choice across reloads.
- Keep the favicon, PWA metadata in `manifest.webmanifest`, its icons, and the precached assets in `service-worker.js` in sync. Use the browser install prompt where available and provide the iOS Home Screen instructions.
- Preserve keyboard support, accessible controls, and responsive layouts when changing the interface.

## Validation
- Check JavaScript syntax with `node --check app.js`.
- Serve the project with `python3 -m http.server 8000` and verify both languages, both themes, game save/restore, difficulty selection, install prompt/help, and mobile layout in a browser. Service workers require localhost or HTTPS.
- There is no package manager, build system, or automated test suite in this project.
