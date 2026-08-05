# Jesus-Celebration-Centre

Jesus Celebration Centre – Kitengela Town | Church website with sermons, events, giving, and admin dashboard

Built with the Next.js App Router and TypeScript.

## Setup

1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000

## Testing

Unit tests run on Vitest with React Testing Library in a jsdom environment. Tests live in `tests/`, mirroring the `app/` and `components/` structure.

- `npm test` – run the suite once
- `npm run test:watch` – re-run on change
- `npm run test:coverage` – run with a v8 coverage report (90% threshold across statements, branches, functions, and lines)
- `npm run typecheck` – TypeScript check with no emit

## Deployment

The site is a fully static Next.js export (`output: 'export'`) published to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`. The workflow sets `NEXT_PUBLIC_BASE_PATH` to the repo name so assets and links resolve under the project sub-path; a local `npm run build` leaves `basePath` empty and serves from the root.
