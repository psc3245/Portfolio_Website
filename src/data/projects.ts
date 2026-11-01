import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "AI-Driven Stock Market Simulation Platform",
    technologies: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "React",
      "SignalR",
      "OpenAI",
    ],
    description:
      "A full-stack stock-trading platform with a React frontend and ASP.NET Core backend. Users can manage portfolios and watchlists, view real-time price data and financial news, and interact with an AI chatbot that can look up stocks, estimate trades, and execute them.",
    github_link: "https://github.com/psc3245/Senior-Project",
    deployment_link: "",
    status: "Completed",
  },
  {
    name: "Real Life Overall",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "React Router",
      "TanStack Query",
      "Tailwind CSS",
      "Expo",
      "Hono",
      "Cloudflare Workers",
      "Drizzle",
      "Neon PostgreSQL",
      "Zod",
    ],
    description:
      "A cross-platform app that uses an LLM to adjust a 2K-style overall rating for real life. It includes web and iOS apps, a Cloudflare Workers API, shared rating logic, and a Postgres data layer.",
    github_link: "https://github.com/psc3245/Real-Life-Overall",
    deployment_link: "",
    status: "Project",
  },
  {
    name: "Card Game",
    technologies: ["C++"],
    description:
      "A C++ card game project with custom cards, menus, and scenes. Its README notes that the project is under development.",
    github_link: "https://github.com/psc3245/Card-Game",
    deployment_link: "",
    status: "Under Development",
  },
  {
    name: "Habit Tracker WebApp",
    technologies: ["React", "Vite", "CSS"],
    description:
      "A React single-page app for tracking daily habits, with a notebook-style layout, habit statistics, and user profile management.",
    github_link: "https://github.com/psc3245/Habit-Tracker",
    deployment_link: "",
    status: "Completed",
  },
  {
    name: "Habit Tracker Backend",
    technologies: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Zod"],
    description:
      "A Node.js and Express REST API backed by PostgreSQL, organized into routes, controllers, services, and repositories.",
    github_link: "https://github.com/psc3245/Habit-Tracker-Backend",
    deployment_link: "",
    status: "Project",
  },
  {
    name: "Portfolio Website",
    technologies: ["React", "TypeScript", "Vite", "CSS Modules"],
    description:
      "Personal portfolio built with React and TypeScript, featuring project details, experience, skills, and live public GitHub repository activity.",
    github_link: "https://github.com/psc3245/Portfolio_Website",
    deployment_link: "",
    status: "Portfolio",
  },
];
