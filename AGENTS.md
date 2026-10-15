# Project Guidelines

## Scope and architecture
- This is a dependency-free static Sudoku app. `index.html` contains the interface, `style.css` its responsive themes, and `app.js` the game logic.
- Keep game data, language, theme, and gameplay preferences in browser `localStorage`. Do not add a backend, analytics, or network persistence; keep privacy copy accurate.

## Implementation conventions
- Use plain HTML, CSS, and browser JavaScript; do not add a framework or build step.
- Keep French and English strings in `TRANSLATIONS` in `app.js`, and mark translatable interface text in `index.html` with `data-i18n` attributes. Keep accessible labels and titles translated too.
- Apply light and dark appearance through the root `data-theme` attribute and preserve the user's theme choice across reloads.
- Keep the favicon, PWA metadata in `manifest.webmanifest`, its icons, and the precached assets in `service-worker.js` in sync. Use the browser install prompt where available and provide the iOS Home Screen instructions.
- For every application change, increment `CACHE_NAME` in `service-worker.js` (for example, `sudoku-shell-v2` to `sudoku-shell-v3`) so installed PWAs refresh their offline cache. If that version has already been incremented in local changes that have not been pushed yet, do not increment it again; increment it again for the next application change after the changes are pushed. Documentation-only changes do not require a cache version increment.
- Preserve keyboard support, accessible controls, and responsive layouts when changing the interface.

## Validation
- Check JavaScript syntax with `node --check app.js`.
- Serve the project with `npx http-server . -p 8000` and verify both languages, both themes, game save/restore, difficulty selection, install prompt/help, and mobile layout in a browser. Service workers require localhost or HTTPS.
- There is no package manager, build system, or automated test suite in this project.
