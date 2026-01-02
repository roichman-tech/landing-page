# Roichman Tech Landing Page

Marketing site built with React, Vite, TypeScript, and Tailwind CSS. Fonts are self-hosted (Inter, Sora) and loaded via a critical CSS link for faster first paint.

## Getting Started

```sh
bun install
bun dev       # start Vite dev server
bun run build # production build
bun preview   # preview the production build locally
bun lint      # Biome linter
bun format    # Biome formatter
bun check     # type-check with Bun
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

## Import Order (convention)

Group imports with blank lines in this order so `biome check` can keep them tidy:
1) react / react-dom
2) External packages
3) `node:` built-ins
4) `@/app` aliases
5) `@/view` aliases
6) Local relative imports
7) Anything else

## Notes

- Fonts live in `public/fonts/` with their OFL licenses.
- No client-side router is needed; the page is single-view.
- If you remove or add UI primitives, clean up `src/components/ui/` and dependencies to keep the bundle small.
