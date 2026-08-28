# AGENTS.md

Guidance for AI agents working in the **gta6-web** repository.

## Project overview

Website about **Grand Theft Auto VI (GTA 6)**. This repo is in early setup; structure and stack will be defined as the project grows.

## Goals

- Build a fast, polished public site about GTA 6 (news, features, media, and related content as scope is defined).
- Keep content and code organized so agents and humans can extend the site without guesswork.

## Agent conventions

- Prefer minimal, focused changes scoped to the task at hand.
- Match existing conventions once code and folders exist.
- Do not commit unless explicitly asked.
- Do not invent official Rockstar/GTA facts, release dates, or pricing; use sourced or clearly labeled speculative content.
- Flag unresolved product decisions (IA, stack, hosting) rather than assuming answers.

## Repository structure

To be defined. Suggested layout as the project matures:

```
gta6-web/
├── AGENTS.md        # This file
├── README.md        # Human-readable overview
└── (app / design / assets TBD)
```

## Related files

| File | Purpose |
|---|---|
| `README.md` | Human-readable repo overview (add when the site takes shape) |

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
