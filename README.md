# Portfolio Website

Peter Collins' personal portfolio site — a single-page React app covering bio, projects, experience, skills, and contact info.

Live sections: Welcome, Projects and Coursework, Experience, Skills, What I'm Working On, and Contact.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and build
- CSS Modules for component-scoped styling
- [ESLint](https://eslint.org/) for linting

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command           | Description                        |
| ------------------ | ----------------------------------- |
| `npm run dev`      | Start the Vite dev server           |
| `npm run build`    | Type-check and build for production |
| `npm run preview`  | Preview the production build        |
| `npm run lint`     | Run ESLint                          |

## Project Structure

```
src/
├── Components/   # React components, one per section
├── Style/        # CSS Modules, one per component
├── Assets/       # Images and logos
├── types.ts      # Shared TypeScript types
├── App.tsx       # Section layout / routing
└── main.tsx      # Entry point

public/
└── Peter-Collins-Resume.pdf   # Served for the resume download button
```

## Deployment

`npm run build` outputs a static site to `dist/`, deployable to any static host (Vercel, Netlify, GitHub Pages, etc.).
