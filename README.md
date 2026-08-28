# GTA 6 Hub (gta6-web)

An **unofficial, fan-made** website about **Grand Theft Auto VI** — news, features, media, and clearly-labelled community speculation.

> This project is not affiliated with, endorsed by, or sponsored by Rockstar Games or Take-Two Interactive. All trademarks belong to their respective owners. No official release dates or pricing are claimed.

## Tech stack

- **[Next.js](https://nextjs.org/)** (App Router) — React framework
- **TypeScript**
- **Tailwind CSS v4**
- **ESLint** (`eslint-config-next`)

> Stack decision: `AGENTS.md` left the stack undecided. Next.js + TypeScript + Tailwind was chosen as a fast, widely-supported default for a polished public site. Revisit if the team prefers a different approach.

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server (http://localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
gta6-web/
├── .cursor/environment.json  # Cloud Agent dev environment (install + dev server)
├── src/
│   ├── app/                  # App Router: layout, page, global styles
│   └── components/           # UI sections (Hero, About, Features, Watch, FAQ, ...)
├── public/                   # Static assets
└── package.json
```

## Cloud Agent environment

`.cursor/environment.json` configures the Cursor Cloud Agent environment:

- `install`: `npm ci` — installs dependencies from the lockfile
- `terminals`: runs `npm run dev` so the site is available while an agent works
- `ports`: exposes `3000`

## Content guidelines

- Do not present speculation as fact. Label community theories clearly.
- Do not invent official Rockstar/GTA facts, release dates, or pricing.
- Prefer sourced information for anything presented as confirmed.
