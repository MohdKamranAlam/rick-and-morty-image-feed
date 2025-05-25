A Next.js + TypeScript project that consumes the **Rick & Morty REST API** to
display an episode list in a sidebar and a responsive grid of character images.

## Features
- Initial load: first-page characters + full episode list (scrollable)
- Click an episode ⇒ highlights item & swaps grid to that episode’s characters
- Click again ⇒ clears selection and re-shows default grid
- Fully typed, uses **@tanstack/react-query** for caching/fetch, Tailwind CSS for styling
- Mobile-friendly CSS grid

## Clone & run locally
```bash
# 1. Clone the repository (replace <your-username> with your GitHub handle or fork URL)
git clone https://github.com/MohdKamranAlam/rick-and-morty-image-feed.git
cd rick-and-morty-image-feed

# 2. Install dependencies
npm install   

# 3. Start the dev server
npm run dev
# open http://localhost:3000 in your browser