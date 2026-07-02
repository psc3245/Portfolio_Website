import styles from "../Style/Projects.module.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "PredictionMarketArbAlert",
    technologies: ["Python", "Ollama"],
    description: "Description Here",
    github_link: "https://github.com/psc3245/PredictionMarketArbAlert",
    deployment_link: "",
    start_date: "June 2026",
    finish_date: "June 2026",
  },
  {
    name: "PredictionMarketArbAlert",
    technologies: ["Python", "Ollama"],
    description: "Description Here",
    github_link: "https://github.com/psc3245/PredictionMarketArbAlert",
    deployment_link: "",
    start_date: "June 2026",
    finish_date: "June 2026",
  },
  {
    name: "PredictionMarketArbAlert",
    technologies: ["Python", "Ollama"],
    description: "Description Here",
    github_link: "https://github.com/psc3245/PredictionMarketArbAlert",
    deployment_link: "",
    start_date: "June 2026",
    finish_date: "June 2026",
  },
  {
    name: "PredictionMarketArbAlert",
    technologies: ["Python", "Ollama"],
    description: "Description Here",
    github_link: "https://github.com/psc3245/PredictionMarketArbAlert",
    deployment_link: "",
    start_date: "June 2026",
    finish_date: "June 2026",
  },
  {
    name: "PredictionMarketArbAlert",
    technologies: ["Python", "Ollama"],
    description: "Description Here",
    github_link: "https://github.com/psc3245/PredictionMarketArbAlert",
    deployment_link: "",
    start_date: "June 2026",
    finish_date: "June 2026",
  },
  {
    name: "PredictionMarketArbAlert",
    technologies: ["Python", "Ollama"],
    description: "Description Here",
    github_link: "https://github.com/psc3245/PredictionMarketArbAlert",
    deployment_link: "",
    start_date: "June 2026",
    finish_date: "June 2026",
  },
];

function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsHeader}>
        <h1 className={styles.projectsTitle}>Projects</h1>

        <button className={styles.seeMoreButton}>See More</button>
      </div>

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
