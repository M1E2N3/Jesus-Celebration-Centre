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
