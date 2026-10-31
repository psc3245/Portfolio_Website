import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "AI-Driven Stock Market Simulation Platform",
    technologies: ["C#", "SQL", "React.js", "Python", "LLMs"],
    description:
      "Full-stack platform simulating stock and crypto trading with historical and live market data, letting users execute virtual trades risk-free. Integrated an AI assistant powered by open-source LLMs to summarize market conditions, explain trading concepts, and suggest simulated trades, backed by a data ingestion pipeline that feeds market data into the LLM workflow.",
    github_link: "https://github.com/psc3245/Senior-Project",
    deployment_link: "",
    status: "Completed",
  },
  {
    name: "Real Life Overall",
    technologies: ["TypeScript", "React", "Expo", "Hono", "Cloudflare Workers", "Drizzle", "PostgreSQL"],
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
    technologies: ["React.js", "Express", "Node.js"],
    description:
      "Full-stack habit-tracking platform built with a modular Controller-Service-Repository architecture. Features a custom RESTful API for CRUD operations on user habits and a unified data schema tracking streaks, consistency, and completion history.",
    github_link: "https://github.com/psc3245/Habit-Tracker",
    deployment_link: "",
    status: "Completed",
  },
  {
    name: "Habit Tracker Backend",
    technologies: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
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
