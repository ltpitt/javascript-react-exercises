# JavaScript React Exercises — Copilot Instructions

Trust these instructions. Only search the codebase if something here seems incomplete or incorrect.

## Overview

Educational repo of independent React exercises grouped by topic. Each topic has `Starter/` and `Solution/` sub-folders. **Every exercise is a fully self-contained Vite + React 19 app** — there is no root-level `package.json`, no shared build system, and no global scripts.

## Repository Layout

```
fundamentals/jsx-expressions/{Starter,Solution}/
state-management/{passing-data-1,passing-data-2,managing-state,all-together}/{Starter,Solution}/
forms/{controlled-components-1,controlled-components-2}/{Starter,Solution}/
hooks/{state-management-recap,state-and-side-effects,side-effect-cleanup}/{Starter,Solution}/
redux/goals-todos-app/                   ← Redux 5 + react-redux 9 + redux-thunk 3
zustand/{zustand-basics,zustand-advanced}/{Starter,Solution}/
testing/{react-test-demo,redux-test-demo}/
.github/workflows/build-check.yml       ← CI pipeline (see below)
.github/copilot-instructions.md         ← THIS FILE
```

## Build, Test, and Run

Always `cd` into the specific exercise directory first. All commands are run from inside the exercise folder.

| Step | Command | Timeout | Notes |
|---|---|---|---|
| Install | `npm install` | 120 s | Never cancel. Deprecation warnings are normal. |
| Dev server | `npm start` | 30 s | Vite; opens **http://localhost:5173**. |
| Production build | `npm run build` | 30 s | Vite build; all exercises build cleanly. |
| Tests | `npm test` | 30 s | Vitest — no `--watchAll` flag needed. |
| Update lock file only | `npm install --package-lock-only` | 30 s | Use when syncing lock file after `package.json` edits. |

- `npm test` exits with code 1 in Starter exercises that have no tests — this is **expected and normal**.
- `npm audit` warnings about security vulnerabilities are **expected** in this educational repo — do not attempt to fix.

## CI Pipeline (`.github/workflows/build-check.yml`)

Runs `npm ci && npm run build` on every PR/push to `main`. Covered exercises:

- `fundamentals/jsx-expressions/Solution`
- `state-management/managing-state/Solution`
- `forms/controlled-components-1/Solution`
- `hooks/state-and-side-effects/Solution`
- `redux/goals-todos-app`
- `testing/react-test-demo` ← also runs `npm test`

**`npm ci` requires `package-lock.json` to exactly match `package.json`.** After changing any dependency version, always regenerate all lock files or CI will fail. Run from the repo root:

```bash
find . -name "package.json" \
  ! -path "*/node_modules/*" \
  ! -path "*/.github/*" \
  -execdir sh -c 'echo "=== $(pwd) ===" && npm install --package-lock-only' \;
```

Commit all updated `package-lock.json` files together with the `package.json` changes. Verify with `npm ci` in at least one affected directory.

## Key Guardrails

- **Vite, not CRA.** Dev port is **5173**. Source files use `.jsx` extension. Config lives in `vite.config.js`. Tests use Vitest.
- **React 19.** Current pinned versions: `react ^19.2.4`, `vite ^8.0.3`, `@vitejs/plugin-react ^6.0.1`, `vitest ^4.1.2`, `jsdom ^29.0.1`.
- **Redux thunk import.** `redux-thunk` v3 removed its default export. Always use `import { thunk } from 'redux-thunk'`, never `import thunk from 'redux-thunk'`.
- **Redux versions.** `redux ^5.0.1`, `react-redux ^9.2.0`, `redux-thunk ^3.1.0`, `@reduxjs/toolkit ^2.11.2`.
- **Zustand.** `zustand ^5.0.12`.

## Keeping This File Up to Date

**Before every `report_progress` call**, ask: _"Have I learned anything new — a pattern, a workaround, a version constraint, a CI quirk, a known error?"_ If yes, add it to the relevant section above in the same commit. This file is the single source of truth for any agent working in this repo and must not lag behind the implementation.