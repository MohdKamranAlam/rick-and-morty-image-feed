A Next.js + TypeScript project that consumes the **Rick & Morty REST API** to
display an episode list in a sidebar and a responsive grid of character images.

## Features
- Initial load: first-page characters + full episode list (scrollable)
- Click an episode ⇒ highlights item & swaps grid to that episode’s characters
- Click again ⇒ clears selection and re-shows default grid
- Fully typed, uses **@tanstack/react-query** for caching/fetch, Tailwind CSS for styling
- Mobile-friendly CSS grid

## Quick start
```bash
npm install
npm run dev
# open http://localhost:3000
