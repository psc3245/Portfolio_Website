# Portfolio Website

Peter Collins' personal portfolio site — a single-page React app covering bio, projects, experience, skills, and contact info.

Live sections: Welcome, Projects and Coursework, Experience, Skills, What I'm Working On, and Contact.

Project descriptions, technologies, and statuses are curated in
`src/data/projects.ts`. The Projects section reads public repository activity
from the GitHub API when the page loads and offers a manual refresh. GitHub
activity updates the last-push date and star count; it does not determine
whether a project is in progress or completed.

### Scheduled portfolio project sync

The local scheduled updater can refresh portfolio project details from
repositories checked out on the current computer, then open a PR and merge it
after required GitHub checks pass. Set it up separately on each computer:

1. Install Node.js 22.12+, Git, GitHub CLI (`gh`), and GitHub Copilot CLI.
2. Sign in with `gh auth login` and confirm the account can write to
   `psc3245/Portfolio_Website`.
3. Install this portfolio's dependencies with `npm install`.
4. Run `npm run portfolio-sync:setup` and enter the portfolio checkout and each
   project repository checkout path when prompted.

The setup checks tool versions, Copilot CLI authentication, GitHub CLI
authentication and portfolio write access, and GitHub SSH access for every
project checkout. Add only repositories you are comfortable describing on a
public website. The scheduled agent sends README and package/language manifest
excerpts to Copilot; it does not send source-code files. It installs a daily
schedule at the local time you choose.
Repository paths and tool locations are saved in the computer user's config
directory, not in the repository. The computer must be on and able to connect
to GitHub at the scheduled time. Linux and macOS use the user's cron schedule;
Windows uses Task Scheduler. Run setup again on each computer to configure its
paths and schedule, or to change either later.
If an SSH key depends on a running SSH agent, make sure that agent is available
to the scheduled process as well as the interactive setup shell.

The updater stops without merging if a repository has uncommitted changes,
validation fails, required checks fail or time out, or no required checks are
configured. Check the `sync.log` file in the printed configuration directory
for scheduled-run output. It does not overwrite local work or push source
repository changes.

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
| `npm run portfolio-sync:setup` | Configure local repository paths, prerequisites, and the daily schedule |
| `npm run portfolio-sync:run` | Run the scheduled GitHub sync immediately |

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

scripts/
└── portfolio-sync.mjs         # Local setup and scheduled GitHub PR workflow
```

## Deployment

`npm run build` outputs a static site to `dist/`, deployable to any static host (Vercel, Netlify, GitHub Pages, etc.).
