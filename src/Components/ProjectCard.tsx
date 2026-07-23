import styles from "../Style/ProjectCard.module.css";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <h2 className={styles.projectTitle}>{project.name}</h2>
      </div>

      <div className={styles.techSection}>
        <ul className={styles.techList}>
          {project.technologies.map((t) => {
            const k = `${t}_${project.name}`;
            return (
              <li key={k} className={styles.techTag}>
                {t}
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.descriptionSection}>
        <p className={styles.projectDescription}>{project.description}</p>
      </div>

      <div className={styles.linkSection}>
        {project.github_link && (
          <a
            href={project.github_link}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}

        {project.deployment_link && (
          <a
            href={project.deployment_link}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>

      <div className={styles.dateSection}>
        <span className={styles.statusBadge}>{project.status}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
