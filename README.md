# TypeScript Learning & Side Projects

A collection of small browser-based TypeScript projects for practicing TypeScript fundamentals and building practical side projects. Each project has its own HTML page, source files, `package.json`, and `tsconfig.json`, so it can be installed, built, and run independently.

## Projects

| Project | What it practices |
|---|---|
| [Book Search](book-search/) | Fetching API data, interfaces, type guards, rendering results |
| [Color Picker](color-picker/) | Union types, type guards, DOM events |
| [Counter](counter/) | Event listeners, data attributes, numeric state |
| [Character Counter](character-counter/) | Text input events, DOM updates, validation |
| [Todo List](todo-list/) | Interfaces, rendering, event delegation, `localStorage` |

## Prerequisites

Install [Node.js](https://nodejs.org/) (LTS recommended), which includes npm. Check your installation:

```bash
node --version
npm --version
```

## Install and run a project

Choose a project directory and install its dependencies. For example:

```bash
cd counter
npm install
npm run build
npm run typecheck
npm run serve
```

Open the local URL printed by `http-server` (usually `http://localhost:8080`) and select `index.html` if a directory listing appears.

Each project is independent. To run another project, return to the repository root and repeat the commands in its folder. For example:

```bash
cd ..
cd todo-list
npm install
npm run build
npm run serve
```

## Available commands in each project

- `npm install` — install that project's dependencies.
- `npm run build` — compile `src/*.ts` into `dist/`.
- `npm run typecheck` — check TypeScript types without generating output.
- `npm run serve` — serve the project's files locally for browser testing.

## Git workflow

Run Git commands from this repository's root so all projects are committed to one GitHub repository:

```bash
git status
git add .
git commit -m "Organize TypeScript exercises into independent projects"
git push
```

Generated `dist/` output and `node_modules/` are excluded by `.gitignore`. Each project has its own `package.json` and `tsconfig.json`; no monorepo tool is required.

## Learning goals

- Strengthen TypeScript fundamentals through hands-on practice.
- Build small applications that use browser APIs and the DOM.
- Practice API requests, type guards, interfaces, and local storage.
- Learn to configure, compile, and test projects independently.
- Improve code organization, readability, and maintainability.
