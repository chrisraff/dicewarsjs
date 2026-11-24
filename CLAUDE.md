# CLAUDE.md

Guidance for Claude Code, and for other agents through the `AGENTS.md` symlink, working in this repo.

DiceWarsJS is a turn-based strategy game: players conquer territories on a hex grid by rolling dice to attack and defend. The modernization in `docs/MODERNIZATION_ROADMAP.md` is finished and the repo is modern-only: Vite + Vitest, PixiJS v8 and Preact on top of a pure `src/engine/`. No CreateJS code remains.

## Commands

```bash
npm run dev             # Vite dev server on port 3000
npm run build           # production build; npm run preview serves it
npm test                # full Vitest suite, behind a machine-wide lock (see Testing)
npx vitest run <path>   # only the tests for the area you changed
npm run test:coverage   # coverage, with per-directory thresholds in vite.config.js
npm run lint            # eslint . --ext .js,.jsx,.mjs (lint:fix applies fixes)
npm run format:check    # prettier --check . as CI runs it (format writes)
```

Bot tooling: `arena` (one seeded ELO ranking), `arena:sweep` (multi-seed mean win%/ELO with 95% CIs), `new-bot`, `validate-bot`, `benchmark-bot`, `validate-community-bots`, `tournament` (built-in plus community bots; persists ELO and the leaderboard). ML scripts are under [ML bot pipeline](#ml-bot-pipeline).

**Before calling a task done**, `npm test`, `npm run lint` and `npm run build` pass, and `npm run test:coverage` stays above the thresholds in `vite.config.js`. New behavior comes with tests.

## Architecture

`docs/ARCHITECTURE.md` has the layer diagram and data flows. The entry point is `src/main.jsx`, loaded by `index.html`.

- `src/engine/`: pure rules (`createGame`, `applyAction`, `getValidMoves`, `runAI`). No DOM; runs in Node and the browser. `applyAction` returns a new state and never mutates the old one.
- `src/ai/`: built-in bots, `aiConfig.js` (the picker registry), `difficultyModes.js` (Easy/Standard/Hard lineups, validated against the picker at import; Custom is UI-only).
- `src/arena/`: headless bot SDK. `builtInBots.js` (the competitive registry), match and tournament runners, `elo.js`, custom-bot compiling and validation, the replay format, `encodeObservation.js`.
- `src/controller/`: `GameController.js` runs the loop (title → mapPreview → playing → gameOver), human input and step-by-step AI turns. Also `KeyboardController.js`, `canvasPointer.js`, `TitleAttractMode.js`.
- `src/store/GameStore.js`: observable store (shallow-merge `setState`, error-isolated subscribers) shared by controller, renderer and UI. Components read it with `useGameStore`.
- `src/renderer/`: PixiJS (`GameRenderer`, `HexGridRenderer`, `DiceRenderer`, `BattleAnimation`, `themes.js`). `src/ui/`: Preact screens and HUD, routed by `App.jsx`. `src/audio/SoundManager.js`: Web Audio, lazy `AudioContext`.
- `src/game/` + `server/daily-leaderboard/`: Daily Conquest (`docs/DAILY_CONQUEST.md`). The leaderboard is a Cloudflare Worker + D1, off unless `VITE_DAILY_LEADERBOARD_URL` is set.
- `bots/`: sample bots. `community-bots/registry.json`: community bots. `ml/`: Python trainers.

## Bots

Built-in bots in `src/ai/` use the legacy game-object interface: they attack by setting `game.area_from` and `game.area_to`, and return 0 to end the turn. Arena and community bots use the interface in `docs/BOT_GUIDE.md`: `(state) => { from, to } | null`. Randomness comes only from `game.random()` / `state.random()`, a seeded per-decision stream; `Math.random` breaks same-seed reproducibility (#151).

Two registries hide bots independently, and the sets differ on purpose: `hidden` in `src/ai/aiConfig.js` keeps a bot out of the game-setup picker, and `hidden` in `src/arena/builtInBots.js` keeps it off the competitive surfaces (arena, tournament, leaderboard).

- **Everywhere**: the self-play personas `ai_conqueror` (the strongest net the game ships), `ai_blitz` and `ai_survivor`, which make up the Hard lineup (`docs/ml-bot/PERSONAS.md`); `ai_lookahead` (the strongest hand-written bot), `ai_strategist`, `ai_adaptive`; `ai_default` (the original game's AI, and the default Standard lineup). Personas are tagged `persona`, which keeps them out of the `ppo:gate` reference field.
- **Picker and attract mode only**: `ai_defensive`, `ai_example` (the Easy lineup).
- **Hidden, dev/eval only**: `ai_expectimax` (the ML search baseline; usable by name from the CLI), `ai_bc` (a behavioral clone of Lookahead), `ai_ppo` (frozen v2 weights; the strength bar for `ppo:gate`).

## UI and controller rules

- **Board hints**: `GameController.refreshCandidateHighlights()` is the only writer. It derives `store.candidateAreas` from the engine's `getValidMoves`, so the board can't drift from the rules. Gated on the `boardHints` preference; null for a spectator or on an AI's turn.
- **Attacks** take two clicks, from then to. A primary click on water (`handleTerritoryClick(0)` via `canvasPointer.js`) cancels a half-made attack through `cancelSelection()`, which Escape also calls.
- **Overlay clears**: the hint layer is the lowest overlay, beneath the focus ring, the dice and the from/to selection. Mid-game, use `clearSelectionHighlights()`, which keeps the focus ring. `clearHighlights()` wipes everything; use it only where you leave the playing screen and null `store.focusedAreaId` in the same step (quit to title).
- **The board is real DOM**: `BoardFocus` renders a `role="application"` group of `.sr-only` territory buttons between RULES and END TURN, so document order is the tab order. On the human's turn their own territories are tabbable and the rest are arrow-reachable. Button names carry move state (`can attack`, `selected`, `valid target`, ...) from `getValidMoves`, the same rule behind clicks and hints. `store.focusedAreaId` mirrors DOM focus. `KeyboardController.js` owns only the arrows, E and Escape, and ignores them while `quitConfirmOpen`, `rulesOpen` or `settingsOpen` is set.
- **Route-change focus**: a screen reached through a control that unmounts with the old screen focuses its primary control once, on mount, with `focus({ preventScroll: true })` (TitleScreen START, MapPreview PLAY, GameOverScreen HOME, TopNav's `aria-current` tab; `MenuScreen focusTitleOnMount` focuses the headline). The playing screen places no focus. GameOverScreen waits if the rules card is open.
- **Mounted outside the screen switch**: `RulesModal` (opened by `store.rulesOpen`; its capture-phase Escape runs before QuitConfirm's) and `ScreenReaderAnnouncer` (the only `role="status"` region). `useAnnouncer` speaks only on `playing`/`gameOver` and resets to `''` elsewhere, because a same-string `setState` is a no-op and the next game's identical line would go unspoken.
- **Theming**: DOM screens use the `var(--ui-*)` variables that `applyThemeVars.js` writes; `getTheme` is for the PixiJS renderer only.
- **Attract mode**: `TitleAttractMode.js` plays behind `ATTRACT_SCREENS` (title, arena, tournament, leaderboard) with heuristic bots only (`ATTRACT_BOT_IDS`), so the landing page never loads persona weights.
- **Luck handicap** (#179): `config.luck` (0/1/2, `LUCK_LEVELS` in `src/utils/config.js`) applies only under the Custom difficulty. `resolveLuck(difficulty, luck)` enforces that, and the controller applies it again at the seam every caller goes through. `luckToHandicap` produces the engine's `config.handicap = { playerId, level } | null`: the human rolls `level` extra dice and drops the lowest `level`, attacking and defending. Spectator, attract, arena and tournament games never get one. Replay v2 whitelists it, and `rejectMap` (NEW MAP) must rebuild it or it is lost.

## ML bot pipeline

`docs/ml-bot/` is the source of truth; read `README.md` first, then PLAN, DECISIONS, LOG, RESULTS. When editing: append to DECISIONS.md and RESULTS.md; prepend to LOG.md after its header (newest first); record a persona kill-gate outcome as an `_(Outcome YYYY-MM-DD: …)_` note on its §10.8 bullet in PERSONAS.md.

- **Trainers**: `ml/` holds `dicewars_bc` (behavioral cloning) and `dicewars_ppo` (PPO league), with their own `pyproject.toml`, `requirements.txt` and `ml/tests/` (pytest). Train on the GPU box `shodan`; a CPU box is fine for the dev loop.
- **Pipeline**: `npm run selfplay` (JSONL corpus) → `encode-corpus` → train in `ml/` → `<name>:export`. The PPO loop runs on `ppo:env-server`. `ppo:gate` measures strength, `ppo:curve` scores a run's whole `eval/` stream (`STRENGTH_CURVE.md`), and the `behavior:*` scripts measure how a bot plays differently (`EVAL_HARNESS.md`; the kill gate for persona retrains).
- **Shipped weights**: `bcPolicyWeights.js`, `ppoPolicyWeights.js` and one `<persona>PolicyWeights.js` per persona, in `src/ai/`, run by the pure-JS forward pass in `bcForward.js`. Separate files, each with an `npm run <name>:export` pinned to its checkpoint. Exports are packed (base64 Float32, decoded by `unpackPolicyWeights.js`), so a packed export must target `src/ai/` or it fails; PPO-league snapshots in a temp dir pass `--no-packed`. Repack a module with `python -m dicewars_bc.export_weights --repack-js <file.js> --out <file.js>`.
- **Long runs on shodan**: follow `scripts/shodan/RUNBOOK.md`. Launch only through a Task-Scheduler-owned `wsl.exe`; `nohup` or `&` over SSH is reaped when the WSL2 VM idles out (logs stop at step 0, no error, `uptime` resets). Afterwards run `schtasks /Delete /TN <name> /F`, or the AtStartup trigger relaunches the finished run on reboot. (`Unregister-ScheduledTask -Confirm:$false` fails over SSH: `$false` arrives as `\False`.)
- **Mid-run probes**: runs export gate-ready weights every 1M steps to `ml/runs/<run>/eval/`. Gate one locally (about 8 min on a Mac): `npm run ppo:gate -- --weights <f>.weights.js --fixture <f>.fixture.json --name <NonColliding>`.

### JS ↔ Python contracts

- **Observation encoding** (`src/arena/encodeObservation.js` + `ENCODING_VERSION` + the corpus `manifest.json`): a change to feature columns or their order bumps `ENCODING_VERSION` and lands in the same commit as the trainer change. Since v3 changes are append-only; existing columns never move or renormalize. JS inference accepts any `SUPPORTED_ENCODING_VERSIONS` stamp (older nets ignore the new tail columns); the Python trainer accepts only the current version.
- **PPO frame header** (`scripts/lib/obs-frame.mjs` ↔ `HEADER_STRUCT` in `ml/dicewars_ppo/constants.py`) is separate from the observation tensor. Reward-only signals go in the header, which the net never sees; `HEADER_STRUCT_SHAPED` (behind `--reward-shaping`) deliberately doesn't bump `ENCODING_VERSION`, which would trip the weights' version guards. Header changes still need the JS emitter and Python parser in one commit.

## Testing

- Vitest runs with `globals: true` in the `node` environment. A test that touches `document`, `window`, `localStorage`, canvas or a Preact render must start with `// @vitest-environment jsdom`, or it fails with `X is not defined`.
- Shared mocks and fixtures: `tests/mocks/`. Helpers: `tests/helpers/` (e.g. the WCAG contrast helper `contrast.js`). Benchmarks: `tests/benchmarks/`.
- Several full-suite runs at once can exhaust RAM. Each run is capped at 50% of cores (`maxWorkers`), and `npm test` / `npm run test:coverage` queue on a machine-wide lock (`scripts/test-lock.sh`). Subagents don't run the full suite; they run `npx vitest run <path>` or the `game-test` skill, and the main agent runs `npm test` once at the end.

## Conventions and gotchas

- Imports use relative paths; there are no path aliases. Validate inputs at boundaries and surface errors instead of swallowing them. Commits follow conventional commits (`feat:`, `fix:`, `docs:`, ...). Update the relevant doc, and this file, when workflow or architecture changes.
- **Pre-commit**: husky runs lint-staged (`eslint --fix` + `prettier --write` on staged JS; `prettier --write` on JSON/MD/YAML). It has occasionally left a Markdown file unformatted; if CI's `format:check` flags one, run `npx prettier --write <file>`.
- **Line width** is Prettier's `printWidth: 100`, with deliberately no ESLint `max-len`. Prettier doesn't reflow comments, so don't hand-wrap them to 100.
- **Worktrees**: the SessionStart hook `.claude/hooks/link-node-modules.sh` symlinks the main checkout's `node_modules` in. The link is shared: `npm install <pkg>` writes into the main checkout, and a bare `npm install` replaces the link with a real directory. Under `.claude/worktrees/`, eslint reports a file linted by path as ignored (dot-prefixed ancestor); use `npx eslint --no-ignore <file>`.
- **`gh pr merge --delete-branch`** from a worktree merges, then fails local cleanup (`'master' is already used by worktree`). Confirm with `gh pr view <n> --json state`, then `git push origin --delete <branch>`, `git worktree remove <path>`, `git branch -D <branch>`, `git pull --prune` on master.
