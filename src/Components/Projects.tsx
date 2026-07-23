import styles from "../Style/Projects.module.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "PredictionMarketArbAlert",
    technologies: ["Python"],
    description:
      "A Python service that identifies cross-platform arbitrage opportunities between Kalshi and Polymarket prediction markets, continuously discovering matched market pairs and alerting when price discrepancies create a risk-free profit opportunity.",
    github_link: "https://github.com/psc3245/PredictionMarketArbAlert",
    deployment_link: "",
    status: "In Progress",
  },
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
    name: "Habit Tracker WebApp",
    technologies: ["React.js", "Express", "Node.js"],
    description:
      "Full-stack habit-tracking platform built with a modular Controller-Service-Repository architecture. Features a custom RESTful API for CRUD operations on user habits and a unified data schema tracking streaks, consistency, and completion history.",
    github_link: "https://github.com/psc3245/Habit-Tracker",
    deployment_link: "",
    status: "Completed",
  },
  {
    name: "Uni Trade: Campus Marketplace",
    technologies: ["Java", "MySQL", "Spring Boot"],
    description:
      "Full-stack campus marketplace application. Led backend development with Spring Boot, Java, and MySQL, optimizing database queries for a 30% performance boost, and integrated real-time chat and notifications via WebSockets.",
    github_link: "",
    deployment_link: "",
    status: "Full-Stack Application",
  },
  {
    name: "ComS 319 – Construction of User Interfaces",
    technologies: ["JavaScript"],
    description:
      "Coursework for Iowa State's Construction of User Interfaces, covering UI architecture, event-driven design, and object-oriented UI construction.",
    github_link: "https://github.com/psc3245/ComS319",
    deployment_link: "",
    status: "Coursework",
  },
  {
    name: "ComS 352 – Introduction to Operating Systems",
    technologies: ["C"],
    description:
      "Coursework for Iowa State's Introduction to Operating Systems, covering process and thread management, memory management, and low-level systems programming.",
    github_link: "https://github.com/psc3245/coms352",
    deployment_link: "",
    status: "Coursework",
  },
];

function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsHeader}>
        <h1 className={styles.projectsTitle}>Projects and Coursework</h1>

        <a
          href="https://github.com/psc3245?tab=repositories"
          className={styles.seeMoreButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          See More
        </a>
      </div>

      <p className={styles.sourceLink}>
        This site is also a project — check out its{" "}
        <a
          href="https://github.com/psc3245/Portfolio_Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          source code on GitHub
        </a>
        .
      </p>

      <div className={styles.projectsContent}>
        <div className={styles.projectsGrid}>
          {projects.map((p, index) => (
            <div
              key={`${p.name}-${index}`}
              className={styles.projectCardWrapper}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
