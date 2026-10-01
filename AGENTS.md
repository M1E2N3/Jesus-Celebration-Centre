# Base44 Dev Environment

## Project Type
Pure static website (HTML/CSS/JS) — no build step, no backend, no frameworks.

## Running
`docker compose -f docker-compose.base44.yml up -d` — nginx:alpine serves the repo root on host port 3000.

## Key Notes
- The sandbox root directory has restrictive permissions (700), so nginx workers must run as `user root;` (see `nginx.dev.conf`). Without this, nginx returns 403.
- Healthcheck uses `127.0.0.1` (not `localhost`) because nginx listens on IPv4 only and `localhost` resolves to IPv6 `::1` inside the container.
- Edits to HTML/CSS/JS files are immediately reflected — nginx serves files directly from the bind mount. Call `reload_preview` after edits if the browser doesn't pick them up.
- The `.env.example` references Supabase/Next.js but these are NOT used by this project — it's a dependency-free static site.
- No external credentials or secrets are needed.
