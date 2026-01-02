# Roichman Tech Landing Page

Marketing site built with React, Vite, TypeScript, and Tailwind CSS. Fonts are self-hosted (Inter, Sora) and loaded via a critical CSS link for faster first paint.

## Getting Started

```sh
bun install
bun dev       # start Vite dev server
bun run build # production build
bun preview   # preview the production build locally
bun lint  # Biome linter
bun format # Biome formatter
```

Bun 1.1+ recommended. Vite dev server runs on port 5173 by default.

## Project Structure

- `index.html` – HTML entry; preloads local fonts and CSS
- `src/index.css` – Tailwind base/styles and CSS variables
- `src/main.tsx` – mounts the app
- `src/App.tsx` – renders the landing page
- `src/pages/` – page components
- `src/components/` – UI sections (Header, Hero, Solutions, Process, CTA, Footer)
- `src/components/ui/button.tsx` – shared button variant

## Notes

- Fonts live in `public/fonts/` with their OFL licenses.
- No client-side router is needed; the page is single-view.
- If you remove or add UI primitives, clean up `src/components/ui/` and dependencies to keep the bundle small.
